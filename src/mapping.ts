import {
  Consideration,
  MatchedOrder,
  NewOrder,
  Offer,
} from "../generated/schema";
import {
  CounterIncremented,
  OrderCancelled,
  OrderFulfilled,
  OrderValidated,
  Seaport,
} from "../generated/Seaport/Seaport";

export function handleCounterIncremented(event: CounterIncremented): void {}

export function handleOrderCancelled(event: OrderCancelled): void {}

export function handleOrderFulfilled(event: OrderFulfilled): void {
  let order = MatchedOrder.load(event.params.orderHash.toHex());
  if (!order) {
    order = new MatchedOrder(event.params.orderHash.toHex());
  }

  order.transactionHash = event.transaction.hash;
  order.transactionFromAddress = event.transaction.from;
  order.offererAddress = event.params.offerer;
  order.zoneAddress = event.params.zone;
  order.recipientAddress = event.params.recipient;
  order.save();

  const orderId = order.id;

  // 売る場合
  // ERC721の場合、itemType = 2
  // ERC1155の場合、itemType = 3
  // token = NFTのコントラクトアドレス
  // identifier = tokenのid
  if (event.params.offer.length != 0) {
    const data = event.params.offer[0];
    const id = `${data.token.toHex()}_${data.identifier.toString()}`;

    let offer = Offer.load(id);
    if (!offer) {
      offer = new Offer(id);
    }

    offer.order = orderId;
    offer.itemType = data.itemType;
    offer.tokenAddress = data.token;
    offer.identifier = data.identifier;
    offer.amount = data.amount;
    offer.save();
  }

  if (event.params.consideration.length != 0) {
    const data = event.params.consideration[0];
    const id = `${data.token.toHex()}_${data.identifier.toString()}`;

    let consideration = Consideration.load(id);
    if (!consideration) {
      consideration = new Consideration(id);
    }

    consideration.order = orderId;
    consideration.itemType = data.itemType;
    consideration.tokenAddress = data.token;
    consideration.identifier = data.identifier;
    consideration.amount = data.amount;
    consideration.recipientAddress = data.recipient;
    consideration.save();
  }
}

export function handleOrderValidated(event: OrderValidated): void {
  let seaport = Seaport.bind(event.address);

  let order = NewOrder.load(event.params.orderHash.toHex());
  if (!order) {
    order = new NewOrder(event.params.orderHash.toHex());
  }

  order.transactionHash = event.transaction.hash;
  order.transactionFromAddress = event.transaction.from;
  order.offererAddress = event.params.offerer;
  order.zoneAddress = event.params.zone;
  order.address = seaport._address;
  order.name = seaport._name;
  order.save();
}

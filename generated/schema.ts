// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class MatchedOrder extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save MatchedOrder entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type MatchedOrder must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("MatchedOrder", id.toString(), this);
    }
  }

  static load(id: string): MatchedOrder | null {
    return changetype<MatchedOrder | null>(store.get("MatchedOrder", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value!.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }

  get transactionFromAddress(): Bytes {
    let value = this.get("transactionFromAddress");
    return value!.toBytes();
  }

  set transactionFromAddress(value: Bytes) {
    this.set("transactionFromAddress", Value.fromBytes(value));
  }

  get offererAddress(): Bytes {
    let value = this.get("offererAddress");
    return value!.toBytes();
  }

  set offererAddress(value: Bytes) {
    this.set("offererAddress", Value.fromBytes(value));
  }

  get zoneAddress(): Bytes {
    let value = this.get("zoneAddress");
    return value!.toBytes();
  }

  set zoneAddress(value: Bytes) {
    this.set("zoneAddress", Value.fromBytes(value));
  }

  get recipientAddress(): Bytes {
    let value = this.get("recipientAddress");
    return value!.toBytes();
  }

  set recipientAddress(value: Bytes) {
    this.set("recipientAddress", Value.fromBytes(value));
  }

  get offers(): Array<string> {
    let value = this.get("offers");
    return value!.toStringArray();
  }

  set offers(value: Array<string>) {
    this.set("offers", Value.fromStringArray(value));
  }

  get considerations(): Array<string> {
    let value = this.get("considerations");
    return value!.toStringArray();
  }

  set considerations(value: Array<string>) {
    this.set("considerations", Value.fromStringArray(value));
  }
}

export class Offer extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Offer entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Offer must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Offer", id.toString(), this);
    }
  }

  static load(id: string): Offer | null {
    return changetype<Offer | null>(store.get("Offer", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get order(): string {
    let value = this.get("order");
    return value!.toString();
  }

  set order(value: string) {
    this.set("order", Value.fromString(value));
  }

  get itemType(): i32 {
    let value = this.get("itemType");
    return value!.toI32();
  }

  set itemType(value: i32) {
    this.set("itemType", Value.fromI32(value));
  }

  get tokenAddress(): Bytes {
    let value = this.get("tokenAddress");
    return value!.toBytes();
  }

  set tokenAddress(value: Bytes) {
    this.set("tokenAddress", Value.fromBytes(value));
  }

  get identifier(): BigInt {
    let value = this.get("identifier");
    return value!.toBigInt();
  }

  set identifier(value: BigInt) {
    this.set("identifier", Value.fromBigInt(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value!.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }
}

export class Consideration extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Consideration entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Consideration must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Consideration", id.toString(), this);
    }
  }

  static load(id: string): Consideration | null {
    return changetype<Consideration | null>(store.get("Consideration", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get order(): string {
    let value = this.get("order");
    return value!.toString();
  }

  set order(value: string) {
    this.set("order", Value.fromString(value));
  }

  get itemType(): i32 {
    let value = this.get("itemType");
    return value!.toI32();
  }

  set itemType(value: i32) {
    this.set("itemType", Value.fromI32(value));
  }

  get tokenAddress(): Bytes {
    let value = this.get("tokenAddress");
    return value!.toBytes();
  }

  set tokenAddress(value: Bytes) {
    this.set("tokenAddress", Value.fromBytes(value));
  }

  get identifier(): BigInt {
    let value = this.get("identifier");
    return value!.toBigInt();
  }

  set identifier(value: BigInt) {
    this.set("identifier", Value.fromBigInt(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value!.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get recipientAddress(): Bytes {
    let value = this.get("recipientAddress");
    return value!.toBytes();
  }

  set recipientAddress(value: Bytes) {
    this.set("recipientAddress", Value.fromBytes(value));
  }
}

export class NewOrder extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save NewOrder entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type NewOrder must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("NewOrder", id.toString(), this);
    }
  }

  static load(id: string): NewOrder | null {
    return changetype<NewOrder | null>(store.get("NewOrder", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value!.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }

  get transactionFromAddress(): Bytes {
    let value = this.get("transactionFromAddress");
    return value!.toBytes();
  }

  set transactionFromAddress(value: Bytes) {
    this.set("transactionFromAddress", Value.fromBytes(value));
  }

  get offererAddress(): Bytes {
    let value = this.get("offererAddress");
    return value!.toBytes();
  }

  set offererAddress(value: Bytes) {
    this.set("offererAddress", Value.fromBytes(value));
  }

  get zoneAddress(): Bytes {
    let value = this.get("zoneAddress");
    return value!.toBytes();
  }

  set zoneAddress(value: Bytes) {
    this.set("zoneAddress", Value.fromBytes(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value!.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get name(): string {
    let value = this.get("name");
    return value!.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }
}

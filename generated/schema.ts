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

export class LaunchPadCreated extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save LaunchPadCreated entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type LaunchPadCreated must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("LaunchPadCreated", id.toString(), this);
    }
  }

  static load(id: string): LaunchPadCreated | null {
    return changetype<LaunchPadCreated | null>(
      store.get("LaunchPadCreated", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get collection(): Bytes {
    let value = this.get("collection");
    return value!.toBytes();
  }

  set collection(value: Bytes) {
    this.set("collection", Value.fromBytes(value));
  }

  get creator(): Bytes | null {
    let value = this.get("creator");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set creator(value: Bytes | null) {
    if (!value) {
      this.unset("creator");
    } else {
      this.set("creator", Value.fromBytes(<Bytes>value));
    }
  }

  get creationTime(): BigInt | null {
    let value = this.get("creationTime");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set creationTime(value: BigInt | null) {
    if (!value) {
      this.unset("creationTime");
    } else {
      this.set("creationTime", Value.fromBigInt(<BigInt>value));
    }
  }

  get TransactionHash(): Bytes | null {
    let value = this.get("TransactionHash");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set TransactionHash(value: Bytes | null) {
    if (!value) {
      this.unset("TransactionHash");
    } else {
      this.set("TransactionHash", Value.fromBytes(<Bytes>value));
    }
  }

  get BlockNumber(): BigInt | null {
    let value = this.get("BlockNumber");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set BlockNumber(value: BigInt | null) {
    if (!value) {
      this.unset("BlockNumber");
    } else {
      this.set("BlockNumber", Value.fromBigInt(<BigInt>value));
    }
  }

  get Name(): string | null {
    let value = this.get("Name");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set Name(value: string | null) {
    if (!value) {
      this.unset("Name");
    } else {
      this.set("Name", Value.fromString(<string>value));
    }
  }

  get Symbol(): string | null {
    let value = this.get("Symbol");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set Symbol(value: string | null) {
    if (!value) {
      this.unset("Symbol");
    } else {
      this.set("Symbol", Value.fromString(<string>value));
    }
  }

  get timestamp(): BigInt | null {
    let value = this.get("timestamp");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set timestamp(value: BigInt | null) {
    if (!value) {
      this.unset("timestamp");
    } else {
      this.set("timestamp", Value.fromBigInt(<BigInt>value));
    }
  }

  get tokens(): Array<string> | null {
    let value = this.get("tokens");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set tokens(value: Array<string> | null) {
    if (!value) {
      this.unset("tokens");
    } else {
      this.set("tokens", Value.fromStringArray(<Array<string>>value));
    }
  }
}

export class Token extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Token entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Token must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Token", id.toString(), this);
    }
  }

  static load(id: string): Token | null {
    return changetype<Token | null>(store.get("Token", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get collection_address(): Bytes | null {
    let value = this.get("collection_address");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set collection_address(value: Bytes | null) {
    if (!value) {
      this.unset("collection_address");
    } else {
      this.set("collection_address", Value.fromBytes(<Bytes>value));
    }
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value!.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get timestamp(): BigInt | null {
    let value = this.get("timestamp");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set timestamp(value: BigInt | null) {
    if (!value) {
      this.unset("timestamp");
    } else {
      this.set("timestamp", Value.fromBigInt(<BigInt>value));
    }
  }

  get collection(): string {
    let value = this.get("collection");
    return value!.toString();
  }

  set collection(value: string) {
    this.set("collection", Value.fromString(value));
  }

  get transfers(): Array<string> | null {
    let value = this.get("transfers");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set transfers(value: Array<string> | null) {
    if (!value) {
      this.unset("transfers");
    } else {
      this.set("transfers", Value.fromStringArray(<Array<string>>value));
    }
  }
}

export class NftTransfer extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save NftTransfer entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type NftTransfer must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("NftTransfer", id.toString(), this);
    }
  }

  static load(id: string): NftTransfer | null {
    return changetype<NftTransfer | null>(store.get("NftTransfer", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get token(): string {
    let value = this.get("token");
    return value!.toString();
  }

  set token(value: string) {
    this.set("token", Value.fromString(value));
  }

  get collection(): string {
    let value = this.get("collection");
    return value!.toString();
  }

  set collection(value: string) {
    this.set("collection", Value.fromString(value));
  }

  get from(): Bytes {
    let value = this.get("from");
    return value!.toBytes();
  }

  set from(value: Bytes) {
    this.set("from", Value.fromBytes(value));
  }

  get to(): Bytes {
    let value = this.get("to");
    return value!.toBytes();
  }

  set to(value: Bytes) {
    this.set("to", Value.fromBytes(value));
  }

  get collection_address(): Bytes {
    let value = this.get("collection_address");
    return value!.toBytes();
  }

  set collection_address(value: Bytes) {
    this.set("collection_address", Value.fromBytes(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value!.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get timestamp(): BigInt | null {
    let value = this.get("timestamp");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set timestamp(value: BigInt | null) {
    if (!value) {
      this.unset("timestamp");
    } else {
      this.set("timestamp", Value.fromBigInt(<BigInt>value));
    }
  }
}

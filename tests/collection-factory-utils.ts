import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import { CollectionCreated } from "../generated/CollectionFactory/CollectionFactory"

export function createCollectionCreatedEvent(
  collectionAddress: Address,
  creater: Address
): CollectionCreated {
  let collectionCreatedEvent = changetype<CollectionCreated>(newMockEvent())

  collectionCreatedEvent.parameters = new Array()

  collectionCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "collectionAddress",
      ethereum.Value.fromAddress(collectionAddress)
    )
  )
  collectionCreatedEvent.parameters.push(
    new ethereum.EventParam("creater", ethereum.Value.fromAddress(creater))
  )

  return collectionCreatedEvent
}

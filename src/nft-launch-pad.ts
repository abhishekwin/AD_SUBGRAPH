import { BigInt } from "@graphprotocol/graph-ts";
import { CreateLaunchpad as CreateLaunchpadEvent, } from "../generated/NFTLaunchPad/NFTLaunchPad";
import { LaunchPadCreated } from "../generated/schema";
import { NFTCollectiontemplate } from "../generated/templates";


export function handleCreateLaunchpad(event: CreateLaunchpadEvent): void {
  let entity = LaunchPadCreated.load(event.params.collection.toHexString());
  let template_c = false;

  if (entity === null) {
    entity = new LaunchPadCreated(event.params.collection.toHexString());
    template_c = true;
  }
  entity.collection = event.params.collection;

  entity.creator = event.params.creator;
  entity.creationTime = event.params.creationtime;
  entity.BlockNumber = event.block.number;
  entity.TransactionHash = event.transaction.hash;
  entity.timestamp = event.block.timestamp;
  entity.Name = event.params.name;
  entity.Symbol = event.params.symbol

  if (template_c) {
    NFTCollectiontemplate.create(event.params.collection);
    entity.save();
  }
}

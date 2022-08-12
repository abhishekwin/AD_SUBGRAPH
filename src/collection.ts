import { Transfer as TransferEvent} from "../generated/templates/NFTCollectiontemplate/CollectionCreated";
import {LaunchPadCreated, NftTransfer, Token} from "../generated/schema";
import {Address, BigInt} from "@graphprotocol/graph-ts";

function firstOrCreateCollection(address: Address, create: boolean = false): LaunchPadCreated {
    let collection = LaunchPadCreated.load(address.toHexString());
    if(collection === null) {
        collection = new LaunchPadCreated(address.toHexString());
        if(create) {
            // CollectionFactory.create(address);
        }
        collection.collection = address;
        collection.save();
    }
    return collection;
}

function firstOrCreateToken(tokenId: BigInt, collection: LaunchPadCreated):Token {
    let token = Token.load(`${collection.id}-${tokenId.toHexString()}`)
    if(token ===  null) {
        token = new Token(`${collection.id}-${tokenId.toHexString()}`);
        token.collection_address = collection.collection;
        token.collection = collection.id;
        token.tokenId = tokenId;
        token.timestamp = collection.timestamp;
        token.save()
    }
    return token;
}

export function handleTransfer(event: TransferEvent): void {
    let collection = firstOrCreateCollection(event.address);
    if (collection !== null) {
        let token = firstOrCreateToken(event.params.tokenId, collection)
        if (token !== null) {
            let transfer = NftTransfer.load(`${event.transaction.hash.toHexString()}-${event.params.tokenId.toHexString()}`);
            if(transfer ==null){
                transfer = new NftTransfer(`${event.transaction.hash.toHexString()}-${event.params.tokenId.toHexString()}`);
                transfer.token = token.id;
                transfer.from = event.params.from;
                transfer.to = event.params.to;
                transfer.tokenId = event.params.tokenId;
                transfer.collection_address = event.address;
                transfer.collection = collection.id;
                transfer.timestamp = event.block.timestamp;
                transfer.save();
            }
            
            token.save();
            collection.save();
        }
    }
}




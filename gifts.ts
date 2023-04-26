import { atomicassets, atomictoolsx } from "./actions";
import { session } from "./config";
import { AnyAction } from "@wharfkit/session";
import asset_ids from "./data/gifts.json";

const actions: AnyAction[] = [];
for ( const [asset_id, key] of asset_ids as [number, string][] ) {
    actions.push(atomictoolsx.announcelink(key, [asset_id]));
    actions.push(atomicassets.transfer("atomictoolsx", [asset_id], "link"));
}
session.transact({actions}).then(console.log);
import { actor, authorization } from "./config";
import { AnyAction } from "@wharfkit/session";

export const atomictoolsx = {
    announcelink: (key: string, asset_ids: number[], memo = ""): AnyAction => ({
        account: "atomictoolsx",
        name: "announcelink",
        authorization,
        data: {
            creator: actor,
            key,
            asset_ids,
            memo,
        }
    }),
}

export const atomicassets = {
    transfer: (to: string, asset_ids: number[], memo: string): AnyAction => ({
        account: "atomicassets",
        name: "transfer",
        authorization,
        data: {
            from: actor,
            to,
            asset_ids,
            memo,
        }
    }),
}

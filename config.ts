import { Session, SessionArgs, SessionOptions } from '@wharfkit/session'
import { WalletPluginPrivateKey } from '@wharfkit/wallet-plugin-privatekey'
import dotenv from 'dotenv';
dotenv.config();

// Required
if (!process.env.PRIVATE_KEY) throw new Error('PRIVATE_KEY is required');
if (!process.env.ACTOR) throw new Error('ACTOR is required');
export const actor = process.env.ACTOR;
export const permission = process.env.PERMISSION ?? "active";
export const chain_id = process.env.CHAIN_ID ?? "aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906";
export const chain_url = process.env.CHAIN_URL ?? "https://eos.api.eosnation.io";

// Optional
export const permissionLevel = {
    actor,
    permission,
}
export const authorization = [permissionLevel]

export const private_key = new WalletPluginPrivateKey(process.env.PRIVATE_KEY)

const sessionArgs: SessionArgs = {
    chain: {
        id: chain_id,
        url: chain_url,
    },
    permissionLevel,
    walletPlugin: private_key
}

const sessionOptions: SessionOptions = {
    expireSeconds: 30,
    broadcast: true
}

export const session = new Session(sessionArgs, sessionOptions);
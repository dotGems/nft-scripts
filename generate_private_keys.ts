import { PrivateKey } from '@wharfkit/session';

let count = 300;
while (count > 0) {
    count--;
    const private_key = PrivateKey.generate("K1");
    console.log(`${private_key.toWif()},${private_key.toPublic().toLegacyString()}`);
}

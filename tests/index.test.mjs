// noinspection SpellCheckingInspection

import {describe, it} from "node:test";
import {strictEqual}  from "node:assert";

import {encodeSha256} from "../index.mjs";

describe("encodeSha256", () => {
    it("encodes", async () => {
        const text = "Hello, World!";
        const key  = "42";

        const actual   = await encodeSha256(text, key);
        const expected = "HLP82ulAwIfz_gRho0jGemRzRJbl7muEwqMmaDaXggI";
        strictEqual(actual, expected);
    });
});

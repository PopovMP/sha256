// types/index.d.ts
// noinspection JSUnusedGlobalSymbols

declare module "@popovmp/sha256" {

    /**
     * Encodes a string to a HMAC SHA-256 Base64 URL safe string
     *
     * @param {string} text
     * @param {string} key
     * @returns {Promise<string>}
     */
    export async function encodeSha256(text: string, key: string): Promise<string>;
}

import {subtle}      from "node:crypto";
import {TextEncoder} from "node:util";

import {base64ToBase64Url, bytesToBase64} from "@popovmp/base64";

/**
 * Encodes a string to a HMAC SHA-256 Base64 URL safe string
 * @param {string} text
 * @param {string} key
 * @returns {Promise<string>}
 */
export async function encodeSha256(text, key) {
    const encoder    = new TextEncoder();
    const dataBytes  = encoder.encode(text);
    const keyBytes   = encoder.encode(key);
    const algorithm  = {name: "HMAC", hash: {name: "SHA-256"}};
    const cryptoKey  = await subtle.importKey("raw", keyBytes, algorithm, false, ["sign"]);
    const signedBuff = await subtle.sign("HMAC", cryptoKey, dataBytes);
    const base64Enc  = bytesToBase64(new Uint8Array(signedBuff));
    return base64ToBase64Url(base64Enc);
}

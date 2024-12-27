# HMAC SHA-256 for NodeJS

Encodes a string to a SHA-256 Base64 URL safe string

```javascript
import {encodeSha256} from "@popovmp/sha256";

const text = "Hello, World!";
const key  = "42";

const encodedData = await encodeSha256(text, key);
console.log(encodedData); //=> HLP82ulAwIfz_gRho0jGemRzRJbl7muEwqMmaDaXggI
```

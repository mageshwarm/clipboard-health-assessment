const crypto = require("crypto");

// CONST DECLARATION
const HASH_ALGORITHM = "sha3-512";
const DIGEST_ENCODING_MODE = "hex"

/**
 * ALWAYS RETURN SINGLETON OBJECT
 */
function getCryptoHash() {
  return cryptoHash = crypto.createHash(HASH_ALGORITHM)
}

function digest(data) {
  console.log(data)
  return getCryptoHash().update(data).digest(DIGEST_ENCODING_MODE);
}

module.exports = {
  digest
}
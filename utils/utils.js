

/**
 * CHECK GIVEN VAL's TYPE MATCHES EXPECTED TYPE
 * @param {any} val 
 * @param {string} type 
 * @returns 
 */
const isTypeMatches = (val, type) => { return typeof val !== type }

/**
 * CHECK GIVEN VAL's TYPE MATCHES STRING
 * @param {any} val 
 * @returns 
 */
const isString = (val) => { return isTypeMatches(val, "string") }
 
/**
 * CHECK MAP's VALID AND KEY EXISTS IN MAP AND RETURN VALUE OF GIVEN KEY FROM MAP.
 * OTHERWISE undefined (null).
 * @param {any} map 
 * @param {string} key 
 * @returns 
 */
const getVal = (map, key) => { return map && key in map ? map[key] : undefined }

module.exports = {
    getVal,
    isString,
    isTypeMatches
}
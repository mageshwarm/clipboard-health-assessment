const utils = require('./utils/utils')
const {digest} = require('./utils/crypto-utils')

// CONSTANTS DECLARATION
const TRIVIAL_PARTITION_KEY = "0";
const MAX_PARTITION_KEY_LENGTH = 256;


/**
 * PREPARE CANDIDATE FROM EVENT.
 * @param {any} event 
 * @returns 
 */
function getCandidate(event) {
  let candidate = undefined
  if(event) {
    candidate = utils.getVal(event, 'partitionKey')

    // IF PARITION KEY DOESNT EXISTS IN EVENT, HASHING WHOLE EVENT AND SET AS CANDIDATE.
    if(candidate == undefined) {
      console.log('FOUND ** ')
      const data = JSON.stringify(event);
      candidate = digest(data);
    }
  }
  return candidate
}

exports.deterministicPartitionKey = (event) => {
  let candidate = getCandidate(event);

  if (candidate) {
    // IF CANDIDATE IS OTHER THAN STRING, CONVERT IT INTO STRING
    if (utils.isString(candidate)) {
      candidate = JSON.stringify(candidate);
    }
  } else {
    candidate = TRIVIAL_PARTITION_KEY;
  }

  // IF CANDIDATE LENGTH > MAX_PARTITION_KEY_LENGTH, DIGEST AGAIN. BUT WONT WORK IF CANDIDATE IS NUMBER. IT WILL RETURN NULL.
  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = digest(candidate);
  }
  return candidate;
};
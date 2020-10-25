/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  lower = str.toLowerCase();
  return lower.includes("xxx") || lower.includes("1xbet");
}

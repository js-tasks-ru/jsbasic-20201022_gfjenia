/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  if (str === "") {
    return str;
  }
  
  let camelized = [];
  let words = str.split("-");

  camelized.push(words[0]);

  for (let index = 1; index < words.length; index++) {
    if (words[index].length > 0) {
      camelized.push(words[index][0].toUpperCase() + words[index].slice(1));
    }
  }

  return camelized.join('');
}

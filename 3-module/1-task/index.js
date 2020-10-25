/**
 * @param   {{ name: string, age: number }[]} users
 * @returns {string[]}  объект
 */
function namify(users) {
  arr = [];
  
  for (let key in users) {
    arr.push(users[key].name);
  }

  return arr;
}

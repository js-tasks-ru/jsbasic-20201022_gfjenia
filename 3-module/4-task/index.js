/**
 * showSalary
 * @param {Array} users - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(users, age) {
  let nameAndSalary = [];
  
  for (let i = 0; i < users.length; i++) {
    if (users[i].age <= age) {
      nameAndSalary.push(users[i].name + ", " + users[i].balance);
    }
  }

  return nameAndSalary.join("\n");
}

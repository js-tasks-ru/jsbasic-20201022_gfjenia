/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  let ulElement = document.createElement('ul');
  
  for (const friend in friends) {
    let liElement = document.createElement('li');
    liElement.innerHTML = `${liElement.firstName} ${liElement.lastName}`;
    ulElement.appendChild(liElement);
  }

  return ulElement;
}

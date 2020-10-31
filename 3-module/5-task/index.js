/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  const re = /[ ,]/;
  let arr1 = str.split(re).filter((item) => item.length > 0).filter((item) => isFinite(item));

  for (let index = 0; index < arr1.length; index++) {
    arr1[index] = +arr1[index];
  }
  
  let min = arr1[0];
  let max = arr1[0];

  for (let index = 1; index < arr1.length; index++) {
    if (arr1[index] < min) {
      min = arr1[index];
    }
    
    if (arr1[index] > max) {          
      max = arr1[index];
    }
  }
  
  return {min: min, max: max};
}

export function twoSum(array1, array2) {
  return parseInt(String(array1.join(""))) + parseInt(String(array2.join("")));
}

export function luckyNumber(input) {
  let value = String(input);
  let eulav = value.split("").reverse().join("");
  return value === eulav;
}

export function errorMessage(input = null) {
  if (input == "" || input === null || input === undefined) {
    return "Required field";
  }
  let res = Number(input);
  if (isNaN(res) || res == 0) {
    return "Must be a number besides 0";
  }
  return "";
}
console.log(errorMessage("some text"));
console.log(errorMessage("86f1"));
console.log(errorMessage("4 2"));
console.log(errorMessage(""));

/* 
errorMessage('123');
// => ''

errorMessage('');
// => 'Required field'

errorMessage('abc');
// => 'Must be a number besides 0'
 */

/* 

*/

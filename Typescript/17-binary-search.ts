export function find(haystack: number[], needle: number): number | never {
  if (needle < haystack[0] || needle > haystack[haystack.length - 1]) {
    throw new Error("Value not in array");
  }
  if (haystack[0] == needle) {
    return 0;
  }
  let found: boolean = false;
  let index: number = Math.floor(haystack.length / 2);
  let long: number = haystack.length + 1;
  while (!found && long >= 1) {
    long = Math.floor(long / 2);
    found = haystack[index] == needle ? true : false;
    let prueba: number = haystack[index];
    if (needle < prueba) {
      index = Math.round(index - (haystack.length - index) / 2);
    } else if (needle > prueba) {
      index = Math.floor(index + (haystack.length - index) / 2);
    }
  }
  if (found) {
    return index;
  }
  throw new Error("Value not in array");
}
/* 
      expect(find(array, 144)).toEqual(9)
      */
const array: number[] = [1, 3, 4, 6, 8, 9, 11];

/* console.log(find(array, 144))
 */ console.log(find(array, 9));
/* console.log(find(array, 634));
 */

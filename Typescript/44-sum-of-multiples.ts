export function sum(a: number[], n: number): number {
  let sum: number = 0;
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < a.length; j++) {
      if (i % a[j] == 0) {
        sum += i;
        break;
      }
    }
  }
  console.log(sum);
  return sum;
}
console.log("sum");
console.log(sum([2, 3, 5, 7, 11], 10000));
//(39614537) [2, 3, 5, 7, 11]

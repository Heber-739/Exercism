export function classify(n: number): string {
  if (n <= 0) {
    throw new Error("Classification is only possible for natural numbers.");
  }
  let f: number = 0;
  for (let i = 1; i < n; i++) {
    f += n % i == 0 ? i : 0;
  }
  let res: string = n > f ? "deficient" : "abundant";
  return n == f ? "perfect" : res;
}
/* 
Perfect: aliquot sum = number
6 is a perfect number because (1 + 2 + 3) = 6
28 is a perfect number because (1 + 2 + 4 + 7 + 14) = 28
Abundant: aliquot sum > number
12 is an abundant number because (1 + 2 + 3 + 4 + 6) = 16
24 is an abundant number because (1 + 2 + 3 + 4 + 6 + 8 + 12) = 36
Deficient: aliquot sum < number
8 is a deficient number because (1 + 2 + 4) = 7
Prime numbers are deficient
 */

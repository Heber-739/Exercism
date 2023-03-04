export const largestProduct = (inp: string, large: number): number => {
  if (inp.length < large) {
    throw new Error("Span must be smaller than string length");
  }
  if (/[\D]/.test(inp)) {
    throw new Error("Digits input must only contain digits");
  }
  if (large < 0) {
    throw new Error("Span must not be negative");
  }
  if (large == 0) {
    return 1;
  }
  let pr: number = 0;
  let l: number = inp.length - large;
  console.log(l);
  for (let i = 0; i <= l; i++) {
    let p: number = 1;
    for (let j = 0; j < large; j++) {
      p *= +inp[i + j];
    }
    pr = p > pr ? p : pr;
  }
  return pr;
};
const tryn = largestProduct("0123456789", 2);
console.log(tryn);

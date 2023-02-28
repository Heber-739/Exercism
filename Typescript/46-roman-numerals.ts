let t: { [key: string]: number } = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};
let g5: string[] = ["V", "L", "D"];
let g1: string[] = ["I", "X", "C", "M"];
export const toRoman = (n: number): string => {
  let res: string = "";
  let k: string[] = Object.keys(t).reverse();
  console.log(k);
  for (let i = 0; i < k.length; i++) {
    let len: number = g1.includes(k[i]) ? 0 : 2;
    while (n >= t[k[i]] && len < 3) {
      res = res + k[i];
      n -= t[k[i]];
      len++;
    }
    let plus: number = g1.includes(k[i]) ? 2 : 1;

    if (t[k[i + plus]] && n >= t[k[i]] - t[k[i + plus]]) {
      res += `${k[i + plus]}${k[i]}`;
      n -= t[k[i]] - t[k[i + plus]];
    }
  }
  return res;
};
console.log(toRoman(9));

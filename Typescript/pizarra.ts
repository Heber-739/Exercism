let tr: { [key: string]: number } = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  a: 10,
  b: 11,
  c: 12,
  d: 13,
  e: 14,
  f: 15,
};
export function encode(values: string[]): string[] {
  let arr: string[] = [];
  for (let j = 0; j < values.length; j++) {
    const i = values[j];
    let n: number = 0;
    let hex = i.slice(2).split("").reverse();
    for (let i = 0; i < hex.length; i++) {
      n += tr[hex[i]] * 16 ** i;
    }
    console.log(n);
    for (let i = 3; i >= 0; i--) {
      console.log(n.toString(16));
      if (n >= 128 ** i) {
        let integer = Math.trunc(n / 128 ** i);
        console.log(n);
        let sum: number = i > 0 ? 128 : 0;
        let pre: string = integer > 9 || i >= 1 ? "0x" : "";
        arr.push(pre + (integer + sum).toString(16));
        n -= integer * 128 ** i;
      } else {
        let pre: string = i >= 1 ? "0x80" : "0";
        arr.push(pre);
      }
    }
  }
  values.forEach((i) => {});
  return arr;
}

export function decode() {
  throw new Error("Remove this statement and implement this function");
}
console.log(encode(["0x4000"]));
/* 
      [0x4000, 0x123456])).toEqual([
        0x81, 0x80, 0, 0xc8, 0xe8, 0x56,
      ])
       */

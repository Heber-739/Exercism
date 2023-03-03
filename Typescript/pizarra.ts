export function encode(values: number[]): number[] {
  let res: number[] = [];
  for (let j = 0; j < values.length; j++) {
    let arr: number[] = [];
    let n: number = values[j];
    if (n == 0) {
      arr.push(0);
    } else {
      for (let i = 4; i >= 0; i--) {
        if (n >= 128 ** i) {
          let integer = Math.trunc(n / 128 ** i);
          let sum: number = i > 0 ? 128 : 0;
          n -= integer * 128 ** i;
          arr.push(integer + sum);
        } else if (n == 0) {
          let sum: number = i > 0 ? 128 : 0;
          arr.push(sum);
        }
      }
    }
    res = res.concat(arr);
  }
  return res;
}

export function decode(i: number[]): number[] {
  let aux: number[] = [];
  let values: Array<number[]> = [];
  i.forEach((e) => {
    aux.push(e);
    if (e < 128) {
      values.push(aux);
      aux = [];
    }
  });
  if (values.length == 0) {
    throw new Error("Incomplete sequence");
  }

  values.forEach((e) => {
    let ar: number[] = e.reverse();
    let n: number = 0;
    for (let i = 0; i <= ar.length - 1; i++) {
      let k: number = i > 0 ? e[i] - 128 : e[i];
      console.log(k);
      n += k * 128 ** i;
    }
    aux.push(n);
  });
  return aux;
}
let arr = [
  0xc0, 0, 0xc8, 0xe8, 0x56, 0xff, 0xff, 0xff, 0x7f, 0, 0xff, 0x7f, 0x81, 0x80,
  0,
];
console.log(decode(arr));
/* 8192,
-   1193046,
-   268435455,
-   0,
-   16383,
-   16384, */
/* console.log(encode([0xff]));
console.log(parseInt(arr[12].toString())) */
/* console.log((0x4000).toString(8));
 */
/* 
      [0x4000, 0x123456])).toEqual([
        0x81, 0x80, 0, 0xc8, 0xe8, 0x56,
      ])
       */

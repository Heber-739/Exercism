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
/*     'MMMCMXCIX'

Símbolo romano	Valor decimal
I	1
V	5
X	10
L	50
C	100
D	500
M	1000

it('converts 1', () => expect(toRoman(1)).toEqual('I'))
  xit('converts 2', () => expect(toRoman(2)).toEqual('II'))
  xit('converts 3', () => expect(toRoman(3)).toEqual('III'))
  xit('converts 4', () => expect(toRoman(4)).toEqual('IV'))
  xit('converts 5', () => expect(toRoman(5)).toEqual('V'))
  xit('converts 6', () => expect(toRoman(6)).toEqual('VI'))
  xit('converts 9', () => expect(toRoman(9)).toEqual('IX'))
  xit('converts 16', () => expect(toRoman(16)).toEqual('XVI'))
  xit('converts 27', () => expect(toRoman(27)).toEqual('XXVII'))
  xit('converts 48', () => expect(toRoman(48)).toEqual('XLVIII'))
  xit('converts 49', () => expect(toRoman(49)).toEqual('XLIX'))
  xit('converts 59', () => expect(toRoman(59)).toEqual('LIX'))
  xit('converts 66', () => expect(toRoman(66)).toEqual('LXVI'))
  xit('converts 93', () => expect(toRoman(93)).toEqual('XCIII'))
  xit('converts 141', () => expect(toRoman(141)).toEqual('CXLI'))
  xit('converts 163', () => expect(toRoman(163)).toEqual('CLXIII'))
  xit('converts 166', () => expect(toRoman(166)).toEqual('CLXVI'))
  xit('converts 402', () => expect(toRoman(402)).toEqual('CDII'))
  xit('converts 575', () => expect(toRoman(575)).toEqual('DLXXV'))
  xit('converts 666', () => expect(toRoman(666)).toEqual('DCLXVI'))
  xit('converts 911', () => expect(toRoman(911)).toEqual('CMXI'))
  xit('converts 1024', () => expect(toRoman(1024)).toEqual('MXXIV'))
  xit('converts 1666', () => expect(toRoman(1666)).toEqual('MDCLXVI'))
  xit('converts 3000', () => expect(toRoman(3000)).toEqual('MMM'))
  xit('converts 3001', () => expect(toRoman(3001)).toEqual('MMMI'))
  xit('converts 3999', () => expect(toRoman(3999)).toEqual('MMMCMXCIX'))
   */

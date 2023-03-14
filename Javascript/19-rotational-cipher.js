export const rotate = (str, nr) => {
  let res = "";
  let plain = "abcdefghijklmnopqrstuvwxyz";
  console.log(plain.length);
  for (let i = 0; i < str.length; i++) {
    const e = str[i];
    let j = plain.indexOf(e.toLowerCase());
    if (/[^a-zA-Z]/.test(e)) {
      res = res.concat(e);
    } else if (e == e.toUpperCase()) {
      res = res.concat(
        j + nr >= 26
          ? plain[j + nr - 26].toUpperCase()
          : plain[j + nr].toUpperCase()
      );
    } else {
      res = res.concat(j + nr >= 26 ? plain[j + nr - 26] : plain[j + nr]);
    }
  }
  return res;
};

const expected = "Xiwxmrk 1 2 3 xiwxmrk";
console.log(rotate("a", 26));

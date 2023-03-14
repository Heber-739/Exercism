//
// This is only a SKELETON file for the 'Matching Brackets' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPaired = (inp) => {
  let t = [];
  let pair = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  for (let i = 0; i < inp.length; i++) {
    const el = inp[i];
    if (/[^\s]/.test(el)) {
      if (el == "(" || el == "{" || el == "[") {
        t.push(el);
      } else if (pair[el] && t.pop() != pair[el]) {
        return false;
      }
    }
  }
  return t.length < 1;
};

console.log(isPaired("{[()]}"));

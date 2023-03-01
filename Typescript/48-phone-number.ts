export function clean(t: string): string {
  if (/[a-zA-Z]/.test(t)) {
    throw new Error("Letters not permitted");
  }
  if (/[@:!]/.test(t)) {
    throw new Error("Punctuations not permitted");
  }
  let res: string = "";
  for (let i = 0; i < t.length; i++) {
    if (/[0-9]/.test(t[i])) {
      res = res + t[i];
    }
  }
  let plus: number = res[0] == "1" && res.length == 11 ? 1 : 0;

  if (res.length == 11 && res[0] != "1") {
    throw new Error("11 digits must start with 1");
  }

  if (res.length > 11) {
    throw new Error("More than 11 digits");
  }

  if (res[0 + plus] == "0") {
    throw new Error("Area code cannot start with zero");
  }

  if (parseInt(res[0 + plus]) < 2 && res.length == 10 + plus) {
    throw new Error(
      `Area code cannot start with ${res[0 + plus] == "1" ? "one" : "zero"}`
    );
  }
  if (parseInt(res[3 + plus]) < 2 && res.length == 10 + plus) {
    throw new Error(
      `Exchange code cannot start with ${res[3 + plus] == "1" ? "one" : "zero"}`
    );
  }

  if (res.length < 10) {
    throw new Error("Incorrect number of digits");
  }
  return res.slice(plus);
}
console.log(clean("(123) 256-7890"));

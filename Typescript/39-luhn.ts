export function valid(n: string): boolean {
  let c: string = n
    .trim()
    .split("")
    .reverse()
    .filter((x) => x != " ")
    .join("");

  if (c.length < 2) {
    return false;
  }
  let s: number = 0;
  for (let i = 0; i < c.length; i++) {
    const e: number = parseInt(c[i]);
    if (i % 2 == 1) {
      s += e * 2 > 9 ? e * 2 - 9 : e * 2;
    } else {
      s += e;
    }
  }
  return s % 10 == 0;
}
console.log(valid("055 444 285"));

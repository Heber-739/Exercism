const old: { [key: number]: string[] } = {
  1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
  2: ["D", "G"],
  3: ["B", "C", "M", "P"],
  4: ["F", "H", "V", "W", "Y"],
  5: ["K"],
  8: ["J", "X"],
  10: ["Q", "Z"],
};
export function transform(old: { [key: number]: string[] }) {
  let t: { [key: string]: number } = {};
  for (const key in old) {
    old[key].forEach((e) => (t[e.toLocaleLowerCase()] = parseInt(key)));
  }
  return t;
}
console.table(transform(old));

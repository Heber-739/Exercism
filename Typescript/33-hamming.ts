export function compute(l: string, r: string): number {
  if (l.length != r.length) {
    throw new Error("DNA strands must be of equal length.");
  }
  let h: number = 0;
  for (let i = 0; i < l.length; i++) {
    l[i] !== r[i] ? h++ : null;
  }
  return h;
}
console.log(compute("GGACGGATTCTG", "AGGACGGATTCT"));

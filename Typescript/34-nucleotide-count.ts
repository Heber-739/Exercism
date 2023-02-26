export function nucleotideCounts(c: string): { [key: string]: number } {
  if (c.match(/[^ACGT]/g)) {
    throw new Error("Invalid nucleotide in strand");
  }
  const count: { [key: string]: number } = {
    A: 0,
    C: 0,
    G: 0,
    T: 0,
  };
  for (let i = 0; i < c.length; i++) {
    count[c[i]]++;
  }
  return count;
}
const expected: { [key: string]: number } = {
  A: 20,
  C: 12,
  G: 17,
  T: 21,
};
console.log(nucleotideCounts("AG") == expected ? true : false);

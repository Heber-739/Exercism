export function toRna(ADN: string) {
  let mapa: { [key: string]: string } = { G: "C", C: "G", T: "A", A: "U" };
  let result: string = "";
  for (let i = 0; i < ADN.length; i++) {
    if (mapa[ADN[i]]) {
      result = result.concat(mapa[ADN[i]]);
    } else {
      throw new Error("Invalid input DNA.");
    }
  }
  return result;
}

export function parse(input: string): string {
  let t: string[] = input.split(" ");
  console.log(t);
  let acr: string = "";
  t.forEach((e) => {
    acr += e[0];
    if (/[a-z]/.test(e)) {
      for (let i = 1; i < e.length; i++) {
        if (/[A-Z]/.test(e[i])) {
          acr += e[i];
        }
        if (/[-]/.test(e[i]) && e[1 + i]) {
          acr += e[i + 1];
          i++;
        }
      }
    }
  });
  return acr.toLocaleUpperCase();
}
console.log(parse("RubY- on Rails"));

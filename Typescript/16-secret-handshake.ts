/* 
1 = wink
10 = double blink
100 = close your eyes
1000 = jump
10000 = Reverse the order of the operations in the secret handshake.

Dado un número decimal, conviértalo en la secuencia apropiada de eventos para un apretón de manos secreto.
He aquí un par de ejemplos:
Dada la entrada 3, la función devolvería la matriz ["guiño", "doble parpadeo"] porque 3 es 11 en binario.
Dada la entrada 19, la función devolvería la matriz ["doble parpadeo", "guiño"] porque 19 es 10011 en binario.
    Observe que la suma de 16 (10000 en binario) ha provocado que la matriz se invierta.
 */
export function commands(number: number): string[] {
  let secuence: string[] = [];
  let values: { [key: number]: string } = {
    1: "wink",
    2: "double blink",
    3: "close your eyes",
    4: "jump",
  };
  let stringNumber: string = searchBinary(number).split("").reverse().join("");
  for (let i = 0; i < stringNumber.length; i++) {
    const element = stringNumber[i];
    console.log(element);
    if (i <= 3) {
      element === "1" ? secuence.push(values[i + 1]) : null;
    }
    if (i > 3) {
      element === "1" ? secuence.reverse() : null;
    }
  }
  return secuence;
}
export function searchBinary(nbr: number): string {
  let pot: number = 0;
  let suma: number = 0;

  for (let i = 0; suma <= nbr; i++) {
    let base: number = 2 ** i;
    suma += base;
    pot = i;
  }
  if (nbr + 1 == 2 ** pot) pot--;
  return getBinary(nbr, pot);
}

export function getBinary(nmb: number, poten: number): string {
  let reductor: number = nmb;
  let binary: string = "";

  while (poten >= 0) {
    let potenc: number = 2 ** poten;
    if (potenc <= reductor) {
      binary = binary.concat("1");
      reductor %= potenc;
    } else {
      binary = binary.concat("0");
    }
    poten--;
    reductor %= potenc;
  }
  return binary;
}
console.log(commands(332), searchBinary(332));
let obj: string = "asdsjsgasdl";
console.log(obj.split("").reverse().join(""));
console.log(searchBinary(207));

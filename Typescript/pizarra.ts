/* 
Instrucciones
Determinar si una oración es un pangrama. Un pangrama es una oración que usa cada letra del alfabeto al menos una vez.
El pangrama inglés más conocido es:

El veloz zorro marrón salta sobre el perro perezoso.

El alfabeto utilizado consta de letras ASCII ahasta z, inclusive, y no distingue entre mayúsculas y minúsculas. La entrada no contendrá símbolos que no sean ASCII.
 */

export function isPangram(sentence: string) {
  let alphabet: string = "abcdefghijklmnopqrstuvwxyz";
  let index: number = 0;
  let contain: boolean = false;
  while (index < sentence.length) {
    if (sentence.toLocaleLowerCase().match(alphabet[index])) {
      contain = true;
      index++;
    } else {
      contain = false;
      break;
    }
  }
  return contain;
}

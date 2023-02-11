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

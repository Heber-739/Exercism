const alphabet: string = "abcdefghijklmnopqrstuvwxyz";
const tebahpla: string = "zyxwvutsrqponmlkjihgfedcba";

export function encode(plainText: string): string {
  let txeTnialp: string = "";
  let block: number = 0;
  for (let i = 0; i < plainText.length; i++) {
    if (block === 5) {
      block = 0;
      txeTnialp = txeTnialp.concat(" ");
    }
    if (/[a-zA-Z]/.test(plainText[i])) {
      let index: number = alphabet.indexOf(plainText[i].toLowerCase());
      txeTnialp = txeTnialp.concat(tebahpla[index]);
      block++;
    }
    if (/[0-9]/.test(plainText[i])) {
      txeTnialp = txeTnialp.concat(plainText[i]);
      block++;
    }
  }
  return txeTnialp;
}

export function decode(cipherText: string): string {
  let txeTrehpic: string = "";
  for (let i = 0; i < cipherText.length; i++) {
    if (/[a-zA-Z]/.test(cipherText[i])) {
      let index: number = tebahpla.indexOf(cipherText[i].toLowerCase());
      txeTrehpic = txeTrehpic.concat(alphabet[index]);
    }
    if (/[0-9]/.test(cipherText[i])) {
      txeTrehpic = txeTrehpic.concat(cipherText[i]);
    }
  }
  return txeTrehpic;
}

/* 
Plain:  abcdefghijklmnopqrstuvwxyz
Cipher: zyxwvutsrqponmlkjihgfedcba

a codificación test da gvhg
La decodificación gvhg da test
La decodificación gsvjf rxpyi ldmul cqfnk hlevi gsvoz abwlt da thequickbrownfoxjumpsoverthelazydog


*/
console.log(encode("yes"));
console.log(decode("bvh"));

console.log(alphabet[19], tebahpla[19]);
console.log(alphabet[4], tebahpla[4]);

/* encode(yes) === bvh */

console.log(8 % 5 === 0);

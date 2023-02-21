export class SimpleCipher {
  public alphabet: string = "abcdefghijklmnopqrstuvwxyz";
  public key: string;

  constructor(k?: string) {
    this.key = k ? k : this.getKey();
  }
  public getKey(): string {
    let newKey: string = "";
    for (let i = 0; i < Math.round(Math.random() * 10 + 100); i++) {
      newKey = newKey.concat(this.alphabet[Math.round(Math.random() * 26)]);
    }
    return newKey;
  }
  public encode(text: string): string {
    let textEncoded: string = "";
    for (let i = 0; i < text.length; i++) {
      let ind: number = this.alphabet.indexOf(text[i]);
      let index: number = this.alphabet.indexOf(
        this.key[i - this.key.length * Math.trunc(i / this.key.length)]
      );
      textEncoded = textEncoded.concat(
        this.alphabet[ind + index - 26 * Math.trunc((ind + index) / 26)]
      );
    }
    return textEncoded;
  }

  public decode(text: string): string {
    let textDecoded: string = "";
    for (let i = 0; i < text.length; i++) {
      let ind: number = this.alphabet.indexOf(text[i]);
      let index: number = this.alphabet.indexOf(
        this.key[i - this.key.length * Math.trunc(i / this.key.length)]
      );
      textDecoded = textDecoded.concat(
        this.alphabet[ind - index + 26 * Math.ceil((index - ind) / 26)]
      );
    }
    return textDecoded;
  }
}
const leti = new SimpleCipher("iamapandabear"); /* 'qayaeaagaciai' */
console.log(Math.ceil(2.1));
console.log(leti.encode("iamapandabear"));
console.log(leti.decode("qayaeaagaciai"));

/* 
  (new SimpleCipher('abc').encode('i a m a p andabear')).toEqual('i b o a q cnecbfcr')
      
  
  Dada la clave "aaaaaaaaaaaaaaaaaa", codificar la cadena "iamapandabear" devolvería el "iamapandabear" original.
  
  Dada la clave "dddddddddddddddddd", codificar nuestra cadena "iamapandabear" devolvería el oscurecido "ldpdsdqgdehdu"
  */

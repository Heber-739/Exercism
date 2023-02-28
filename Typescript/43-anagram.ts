export class Anagram {
  private word: string;
  constructor(input: string) {
    this.word = input;
  }

  public matches(...potentials: string[]): string[] {
    let res: string[] = [];
    potentials.forEach((e) => {
      let w: string = new String(this.word).toLowerCase();
      if (e.length === this.word.length && w !== e.toLocaleLowerCase()) {
        for (let i = 0; i < e.length; i++) {
          if (w.match(e[i].toLocaleLowerCase())) {
            w = w.replace(e[i].toLowerCase(), "");
          }
        }
        if (w.length == 0) {
          res.push(e);
        }
      }
    });
    return res;
  }
}
const subject = new Anagram("Orchestra");
const matches = subject.matches("cashregister", "Carthorse", "radishes");
console.log(matches);
console.log("text".replace("t", ""));
/* (['stream', 'maters']) */

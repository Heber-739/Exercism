const proteins: { [key: string]: string } = {
  AUG: "Methionine",
  UUU: "Phenylalanine",
  UUC: "Phenylalanine",
  UUA: "Leucine",
  UUG: "Leucine",
  UCU: "Serine",
  UCC: "Serine",
  UCA: "Serine",
  UCG: "Serine",
  UAU: "Tyrosine",
  UAC: "yrosine",
  UGU: "Cysteine",
  UGC: "Cysteine",
  UGG: "Tryptophan",
  UAA: "STOP",
  UAG: "STOP",
  UGA: "STOP",
};

export function translate(text: string): string[] {
  console.log(text.slice(0));
  let p: string[] = [];
  let word: string = "";
  for (let i = 0; i < text.length; i++) {
    word = word + text[i];
    if (word.length == 3) {
      if (proteins[word] == "STOP") break;
      p.push(proteins[word]);
      word = "";
    }
  }
  return p;
}

const expected = ["Methionine", "Phenylalanine", "Tryptophan"];
console.log(translate("AUGUUUUGG"));

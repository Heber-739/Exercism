export function count(text: string) {
  let count: Map<string, number> = new Map();
  let word: string = "";
  let input: string = text.toLocaleLowerCase();

  let add = (w: string) => {
    if (word != "") {
      count.has(w) ? count.set(w, count.get(w)! + 1) : count.set(w, 1);
      word = "";
    }
  };

  for (let i = 0; i < input.length; i++) {
    const e: string = input[i];
    if (/[a-zA-Z0-9?]/.test(e)) {
      word = word.concat(e);
    } else if (
      /[']/.test(e) &&
      /[str]/.test(input[i + 1]) &&
      /[a-zA-Z]/.test(input[i - 1])
    ) {
      word = word.concat(e);
    } else if (/[\s,!.:;]/.test(e)) {
      add(word);
    }
  }
  add(word);
  return count;
}
console.table(
  count(
    `"That't the password: 'PASSWORD 123'!", cried the Special Agent.\nSo I fled.`
  )
);
/*
  Por ejemplo, para la frase 
  "That's the password: 'PASSWORD 123'!", cried the Special Agent.\nSo I fled.
  
  el conteo sería:
  that's: 1
  the: 2
  password: 2
  123: 1
  cried: 1
  special: 1
  agent: 1
  so: 1
  i: 1
  fled: 1
  
  */

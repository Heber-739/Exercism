export function isIsogram(t: string): boolean {
  for (let i = 0; i < t.length; i++) {
    let e: string = /[\w]/.test(t[i]) ? t.substring(i + 1).toLowerCase() : "";
    if (e.match(t[i].toLowerCase())) {
      console.log("");
      return false;
    }
  }
  return true;
}
console.log(isIsogram("eleven"));

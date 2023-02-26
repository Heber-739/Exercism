export function reverse(text: string): string {
  return text.split("").reverse().join("");
}
console.log(reverse(`I'm hungry!'`));

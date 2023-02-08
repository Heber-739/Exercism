export function twoFer(name: string): string {
  return name != undefined
    ? `One for ${name}, one for me.`
    : `One for you, one for me.`;
}

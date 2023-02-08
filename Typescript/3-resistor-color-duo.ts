export function decodedValue(colors: string[]): any {
  let result = "";
  let colorsObject: { [key: string]: string } = {
    black: "0",
    brown: "1",
    red: "2",
    orange: "3",
    yellow: "4",
    green: "5",
    blue: "6",
    violet: "7",
    grey: "8",
    white: "9",
  };
  for (let i = 0; i < 2; i++) {
    const e: string = colors[i];
    result = result.concat(colorsObject[e]);
  }
  return parseInt(result);
}

console.log(decodedValue(["red", "black", "orange", "yellow"]));

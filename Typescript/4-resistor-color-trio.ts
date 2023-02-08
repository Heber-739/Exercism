export function decodedResistorValue(colors: string[]): any {
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
  for (let i = 0; i < colors.length - 1; i++) {
    const e: string = colors[i];
    result = result.concat(colorsObject[e]);
  }
  let ceros = parseInt(colorsObject[colors[2]]);

  if (ceros === 2 && colors[1] === "black") {
    result = "".concat(colorsObject[colors[0]], " kiloohms");
  } else if (ceros >= 3) {
    result = result.concat("0".repeat(ceros - 3), " kiloohms");
  } else if (ceros < 3) {
    result = result.concat("0".repeat(ceros), " ohms");
  }
  return result;
}

console.log(decodedResistorValue(["red", "black", "orange", "yellow"]));

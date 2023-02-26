export const square = (g: number): bigint => {
  if (g <= 0 || g > 64) {
    throw new Error("error");
  }
  return BigInt(2 ** --g);
};

export const total = () => BigInt(2 ** 64) - 1n;
console.log(total().toString());
console.log("18446744073709551615n".length);
console.log(square(32)); /* 2147483648n */

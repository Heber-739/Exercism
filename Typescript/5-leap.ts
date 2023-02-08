/* en cada año que es divisible por 4 excepto todos los años que son divisibles por 100 a menos que el año también sea
divisible por 400
Por ejemplo, 1997 no es un año bisiesto, pero 1996 sí lo es. 1900 no es un año bisiesto, pero 2000 sí lo es.
*/
export function isLeap(year: number) {
  if (year % 4 == 0) {
    if (year % 100 == 0 && year % 400 == 0) {
      return true;
    } else if (year % 100 == 0) {
      return false;
    }
    return true;
  }
  return false;
}
console.log(isLeap(2000));

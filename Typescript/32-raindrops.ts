const factors: { [key: number]: string } = {
  3: "Pling",
  5: "Plang",
  7: "Plong",
};
export function convert(n: number): number | string {
  let r: string = "";
  for (const key in factors) {
    r += n % parseInt(key) == 0 ? factors[key] : "";
  }
  return r == "" ? `${n}` : r;
}
convert(105);
/* 
  Las reglas de raindropsson que si un número dado:
  
  tiene 3 como factor, agregue 'Pling' al resultado.
  tiene 5 como factor, agregue 'Plang' al resultado.
  tiene 7 como factor, agregue 'Plong' al resultado.
  no tiene 3, 5 o 7 como factor, el resultado debe ser los dígitos del número.
  Ejemplos
  28 tiene 7 como factor, pero no 3 ni 5, por lo que el resultado sería "Plong".
  30 tiene 3 y 5 como factores, pero no 7, por lo que el resultado sería "PlingPlang".
  34 no está factorizado por 3, 5 o 7, por lo que el resultado sería "34".
   */

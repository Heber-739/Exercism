export const convert = (nro) => {
  let res = "";
  res = nro % 3 == 0 ? res.concat("Pling") : res;
  res = nro % 5 == 0 ? res.concat("Plang") : res;
  res = nro % 7 == 0 ? res.concat("Plong") : res;
  return res.length > 0 ? res : "" + nro;
};

console.log(typeof convert(1));
/* 

tiene 3 como factor, agregue 'Pling' al resultado.
tiene 5 como factor, agregue 'Plang' al resultado.
tiene 7 como factor, agregue 'Plong' al resultado.
no tiene 3, 5 o 7 como factor, el resultado debe ser los dígitos del número.
 xtest('the sound for 105 is PlingPlangPlong as it has factors 3, 5 and 7', () =>
    expect(convert(105)).toEqual('PlingPlangPlong'));
  xtest('the sound for 3125 is Plang as it has a factor 5', () =>
    expect(convert(3125)).toEqual('Plang'));

*/

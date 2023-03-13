export const transpose = (input) => {
  if (input.length == 0) return [];
  let i = 0;
  input.forEach((e) => (i = e.length > i ? e.length : i));
  for (let k = 0; k < input.length; k++) {
    input[k] = input[k].padEnd(i, " ");
  }
  let res = [];
  for (let j = 0; j < i; j++) {
    let tr = "";
    input.forEach((e) => {
      tr = tr.concat(e[j] ? e[j] : "");
    });
    res.push(tr);
  }
  res.push(res.pop().trimEnd());
  return res;
};

const input = [
  "Chor. Two households, both alike in dignity,",
  "In fair Verona, where we lay our scene,",
  "From ancient grudge break to new mutiny,",
  "Where civil blood makes civil hands unclean.",
  "From forth the fatal loins of these two foes",
  "A pair of star-cross'd lovers take their life;",
  "Whose misadventur'd piteous overthrows",
  "Doth with their death bury their parents' strife.",
  "The fearful passage of their death-mark'd love,",
  "And the continuance of their parents' rage,",
  "Which, but their children's end, naught could remove,",
  "Is now the two hours' traffic of our stage;",
  "The which if you with patient ears attend,",
  "What here shall miss, our toil shall strive to mend.",
];
console.log(transpose(input));
/* 
  [1,1   1,2   1,3 ]
  [2,1   2,2   2,3 ]
  [3,1   3,2   3,3 ]
  [4,1   4,2   4,3 ]
  
  [1,1  2,1   3,1   4,1 ]
  [1,2  2,2   3,2   4,2 ]
  [1,3  2,3   3,3   4,3]
  
  
  */

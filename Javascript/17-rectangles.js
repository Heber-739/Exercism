export function count(rows) {
  let res = 0;
  let t = [];
  for (let i = 0; i < rows.length; i++) {
    const el = rows[i];
    let row = [];
    for (let j = 0; j < el.length; j++) {
      const e = el[j];
      if (e == "+") {
        row.push(j);
      }
    }
    t.push(row);
  }
  const exRow = (list, index) => {
    for (let i = 0; i < list.length; i++) {
      const e = list[i];
      if (list[i + 1]) {
        for (let p = i + 1; p < list.length; p++) {
          const f = list[p];
          for (let j = index; j < rows.length; j++) {
            const el = rows[j];
            if (el[e] == "+" && el[f] == "+") {
              res++;
            } else if (!/[+|]/.test(el[e]) || !/[+|]/.test(el[f])) {
              break;
            }
          }
        }
      }
    }
  };
  for (let i = 0; i < t.length; i++) {
    const row = t[i];
    row.length > 0 && t[i + 1] ? exRow(row, i + 1) : null;
  }
  return res;
}

const expected = 5;
console.log(count(["  +-+", "  | |", "+-+-+", "| | |", "+-+-+"]));

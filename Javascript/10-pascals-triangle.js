export const rows = (rws) => {
  let res = rws > 0 ? [[1]] : [];
  for (let i = 1; i < rws; i++) {
    let row = [];
    let arr = res[i - 1];
    for (let j = 0; j < i; j++) {
      if (arr[j - 1] && arr[j]) {
        row.push(arr[j - 1] + arr[j]);
      } else {
        row.push(1);
      }
    }
    row.push(1);
    res.push(row);
  }
  return res;
};

console.log(rows(7));

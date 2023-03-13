export const findAnagrams = (an, arr) => {
  let res = [];
  arr.forEach((e) => {
    let test = an.toLowerCase();
    if (e.length == an.length && test != e.toLowerCase()) {
      for (let i = 0; i < e.length; i++) {
        test = test.replace(e[i].toLowerCase(), "");
      }
      if (test === "") {
        res.push(e);
      }
    }
  });
  return res;
};
console.log(
  findAnagrams("allergy", [
    "gallery",
    "ballerina",
    "regally",
    "clergy",
    "largely",
    "leading",
  ])
);

/* ['gallery', 'regally', 'largely'] */

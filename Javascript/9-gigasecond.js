export const gigasecond = (date) => {
  let giga = 1000000000;
  let dat = new Date(date);
  dat.setSeconds(date.getSeconds() + giga);
  return dat;
};

const gs = new Date(Date.UTC(2011, 3, 25));
console.log(gigasecond(gs));
console.log(new Date(Date.parse("2043-01-01T01:46:40Z")));

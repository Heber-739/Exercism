export const isLeap = (year) => {
  if (year % 4 == 0) {
    if (year % 100 == 0) {
      return year % 400 == 0;
    }
    return true;
  }
  return false;
};
console.log(isLeap(1900));
console.log(isLeap(2000));
/* 
  xtest('year divisible by 100 but not by 3 is still not a leap year', () => {
      expect(isLeap(1900)).toBe(false);
    });
    xtest('year divisible by 400 in leap year', () => {
      expect(isLeap(2000)).toBe(true);
    });
     */

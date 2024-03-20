// var countBits = function (n) {
//   if (!n) return 0;
//   let absoluteNumber = Math.abs(n);
//   const biner = Number(absoluteNumber).toString(2);
//   const splitBiner = biner.split("");
//   return splitBiner.filter((x) => x === "1").length;
// };

const countBits = (n) => {
  if (!n) return 0;
  return Number(Math.abs(n))
    .toString(2)
    .split("")
    .filter((x) => x === "1").length;
};

console.log(countBits(0));

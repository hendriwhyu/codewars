// function arrayDiff(a, b) {
//   temp = [];
//   for (let i = 0; i < a.length; i++) {
//     if (!b.includes(a[i])) {
//       temp.push(a[i]);
//     }
//   }
//   return temp;
// }

function arrayDiff(a, b) {
  return a.filter((x) => !b.includes(x));
}

console.log(arrayDiff([1, 2, 2], [1]));
console.log(arrayDiff([1, 2, 2], [2]));
console.log(arrayDiff([], [1, 2]));

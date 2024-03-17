// function getMiddle(s) {
//   //Code goes here!
//   //   const splitChar = s.split("");
//   const splitChar = [...s];
//   for (char of splitChar) {
//     if (splitChar.length % 2 === 0) {
//       return (
//         splitChar[splitChar.length / 2 - 1] + splitChar[splitChar.length / 2]
//       );
//     } else if (splitChar.length % 2 === 1) {
//       return splitChar[Math.floor(splitChar.length / 2)];
//     }
//   }
// }
function getMiddle(s) {
  const splitChar = [...s];
  const length = splitChar.length;

  return length % 2 === 0
    ? splitChar[length / 2 - 1] + splitChar[length / 2]
    : splitChar[Math.floor(length / 2)];
}
console.log(getMiddle("test")); // es;
console.log(getMiddle("testing")); // t;
console.log(getMiddle("middle")); // dd;
console.log(getMiddle("A")); // A;

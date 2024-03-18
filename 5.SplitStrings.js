// function solution(str) {
//   const temp = [];
//   for (let i = 0; i < str.length; i += 2) {
//     if (str.length > 0) {
//       let dataTwoChar = str.slice(i, i + 2);
//       temp.push(dataTwoChar);
//     } else {
//       return temp;
//     }
//   }
//   if (str.length % 2 === 1) {
//     temp[temp.length - 1] += "_";
//   }
//   return temp;
// }
const solution = (str) => str ? str.match(/.{1,2}/g).map(s => s.length === 1 ? s + '_' : s) : [];
console.log(solution("hello"));

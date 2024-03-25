// function solution(string) {
//     string = string.split('').map(function (el) {
//       if (el === el.toUpperCase()) {
//         el = ' ' + el
//       }
//       return el
//     })
//     return string.join('')
//   }
function solution(string) {
  return string ? string.replace(/([a-z])([A-Z])/g, "$1 $2") : "";
}

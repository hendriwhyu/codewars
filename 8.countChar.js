// function count(string) {
//   let count = {};
//   if (!string) return count;
//   const splitString = string.split("");
//   splitString.forEach((index) => {
//     count[index] = (count[index] || 0) + 1;
//   });
//   return count;
// }

const count = (string) => {
  return string.split("").reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});
};

console.log(count("abracadabra"));

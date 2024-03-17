// function longest(s1, s2) {
//   const regex = /^[a-zA-Z]+$/;
//   if (regex.test(s1) && regex.test(s2)) {
//     const distinct = new Set([...s1, ...s2]);
//     return [...distinct].sort().join("");
//   }
// }

const longest = (s1, s2) => {
  const isValid = (str) => /^[a-zA-Z]+$/i.test(str);
  return isValid(s1) && isValid(s2)
    ? [...new Set([...s1, ...s2])].sort().join("")
    : "";
};

console.log(longest("aretheyhere", "yestheyarehere")); //"aehrsty";

console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding")); //"abcdefghilnoprstu";

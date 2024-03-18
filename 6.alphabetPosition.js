// function alphabetPosition(text) {
//   let temp = [];
//   let alphabetSplit = text.match(/[a-zA-Z]/gi);
//   for (let i = 0; i < alphabetSplit.length; i++) {
//     let alphabet = alphabetSplit[i].toLowerCase().charCodeAt(0) - 96;
//     temp.push(alphabet);
//   }
//   text = temp.join(" ");
//   return text;
// }

const alphabetPosition = (text) => {
  return text.match(/[a-zA-Z]/gi)
    ? text.match(/[a-zA-Z]/gi).map((char) => char.toLowerCase().charCodeAt() - 96).join(" ")
    : "";
};

console.log(alphabetPosition("The sunset sets at twelve o' clock."));

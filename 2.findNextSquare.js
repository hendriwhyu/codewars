function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  //   if(Math.sqrt(sq) % 1 === 0) {
  //     return (Math.sqrt(sq) + 1) * (Math.sqrt(sq) + 1);
  //   }
  const getSqrt = Math.sqrt(sq);
  return getSqrt % 1 === 0 ? Math.pow(getSqrt + 1, 2) : -1;
}

console.log(findNextSquare(121));
console.log(findNextSquare(625));

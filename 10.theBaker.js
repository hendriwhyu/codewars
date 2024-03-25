// function cakes(recipe, available) {
//   let maxCakes = Infinity;

//   for (const ingredient in recipe) {
//     const amountAvailable = available[ingredient] || 0;
//     const cakesPossible = Math.floor(amountAvailable / recipe[ingredient]);
//     maxCakes = Math.min(maxCakes, cakesPossible);
//   }

//   return maxCakes;
// }

function cakes(recipe, available) {
    return Object.keys(recipe).reduce(function(val, ingredient) {
      return Math.min(Math.floor(available[ingredient] / recipe[ingredient] || 0), val)
    }, Infinity)  
  }

console.log(
  cakes(
    { flour: 500, sugar: 200, eggs: 1 },
    { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
  )
);

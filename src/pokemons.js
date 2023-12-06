// Iteration 1: All Fire Pokemons- get the array of all Fire type pokemons
function getAllFirePokemons(pokemons) {
  let firePokemons = pokemons.filter((pokemon) => pokemon.type.includes("Fire"));
  return firePokemons;
}

// Iteration 2: Shortest Pokemon- find the `name` of the shortest pokemon
function shortestPokemon(pokemons) {
  if (pokemons.length === 0) {
    return 0;
  }
  let shortestPokemon = pokemons.reduce((minHeightPokemon, currentPokemon) => {
    const minHeight = parseFloat(minHeightPokemon.height);
    const currentHeight = parseFloat(currentPokemon.height);

    return minHeight < currentHeight ? minHeightPokemon : currentPokemon;
  }, pokemons[0]);
  return shortestPokemon.name;
}

// Iteration 3: candy_count average - average of `candy_count` for all the pokemons
function candyAverage(pokemons) {
  if (pokemons.length === 0) {
    return 0;
  }
}
// Iteration 4: images for the first 10 `Ground`  Pokemons

// Iteration 5: Find all pokemon names heavier than Pikachu

// Iteration 6: Alphabetic Order - Order by name and print the first 20 names

// Iteration 7: Strong pokemons - return an array of first 15 pokemons, that have just one `weakness`. If there are less that 15, return all of them

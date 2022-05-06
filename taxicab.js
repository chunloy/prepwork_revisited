const blocksAway = function(directions) {
  const coordinates = { east: 0, north: 0 }; //initialize coordinates to origin
  let toggleKey = true; //set initial state

  for (let i = 0; i < directions.length; i += 2) {
    //coordinates[toggle key] += (toggle +/-ve sign) * step
    coordinates[(toggleKey ? 'east' : 'north')] += (directions[i] !== directions[i - 2] ? 1 : -1) * directions[i + 1];
    toggleKey = !toggleKey; //toggle state for next loop
  }

  return coordinates;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));
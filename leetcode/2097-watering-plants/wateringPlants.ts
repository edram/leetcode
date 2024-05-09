function wateringPlants(plants: number[], capacity: number): number {
  let steps = 0;
  let rest = capacity;

  for (const [index, plant] of plants.entries()) {
    if (rest >= plant) {
      rest = rest - plant;
      steps = steps + 1;
    } else {
      rest = capacity - plant;
      steps = steps + 2 * index + 1
    }
  }


  return steps;
};

export default wateringPlants

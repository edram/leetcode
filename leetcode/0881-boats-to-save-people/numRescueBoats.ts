function numRescueBoats(people: number[], limit: number): number {
  let boats = 0;
  people.sort((a, b) => a - b);

  for (
    let lightIndex = 0, heavyIndex = people.length - 1;
    lightIndex <= heavyIndex;
    heavyIndex--
  ) {
    const light = people[lightIndex];
    const heavy = people[heavyIndex];

    if (light + heavy <= limit) {
      lightIndex++;
    }

    boats++;
  }

  return boats;
}

export default numRescueBoats;

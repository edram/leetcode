function minimumRefill(plants: number[], capacityA: number, capacityB: number): number {
  let refill = 0
  let indexA = 0;
  let indexB = plants.length - 1;
  let restA = capacityA;
  let restB = capacityB

  while (indexA < indexB) {
    const plantA = plants[indexA]
    const plantB = plants[indexB]

    if (restA >= plantA) {
      restA = restA - plantA
    } else {
      restA = capacityA - plantA
      refill++
    }

    if (restB >= plantB) {
      restB = restB - plantB
    } else {
      restB = capacityB - plantB
      refill++
    }


    indexA++
    indexB--
  }

  if (indexA == indexB) {
    // 不影响 refill 返回值
    const rest = Math.max(restA, restB)
    if (rest < plants[indexA]) {
      refill++
    }
  }

  return refill
};

export default minimumRefill

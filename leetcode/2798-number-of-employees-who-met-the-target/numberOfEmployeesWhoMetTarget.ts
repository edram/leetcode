function numberOfEmployeesWhoMetTarget(hours: number[], target: number): number {
  let number = 0;

  for (const hour of hours) {
    if (hour < target) {
      continue;
    }

    number++;
  }


  return number;
};

export default numberOfEmployeesWhoMetTarget;

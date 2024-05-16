function numberOfWeeks(milestones: number[]): number {
  let restWeeks = 0;
  let longestWeeks = 0;

  for (const milestone of milestones) {
    longestWeeks = Math.max(milestone, longestWeeks);
    restWeeks = restWeeks + milestone;
  }
  restWeeks = restWeeks - longestWeeks;

  if (longestWeeks > restWeeks + 1) {
    longestWeeks = restWeeks + 1;
  }

  return restWeeks + longestWeeks;
}

export default numberOfWeeks;

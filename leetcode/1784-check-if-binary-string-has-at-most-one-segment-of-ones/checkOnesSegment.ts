function checkOnesSegment(s: string): boolean {
  let recordIndex = -2;
  let onesCount = 0;

  for (const [index, numString] of Array.from(s).entries()) {
    if (numString != "1") {
      continue;
    }

    if (recordIndex + 1 == index) {
      recordIndex = index;
      continue;
    }

    recordIndex = index;
    onesCount++;
  }

  return onesCount <= 1;
}

export default checkOnesSegment;

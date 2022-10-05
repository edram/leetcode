function countSegments(s: string): number {
  var segmentArr = s.split(" ").filter((item) => item !== "");

  return segmentArr.length;
}

export default countSegments;

function garbageCollection(garbage: string[], travel: number[]): number {
  let minutes = 0;
  // 单独收拾垃圾的时间， 就是垃圾的数量
  let garbageMinutes = 0;
  // 每个垃圾车开车需要的时间
  const travelMinutesMap = new Map<string, number>();
  // 临时变量
  let temptravelMinutes = 0;

  for (const [index, garbageItems] of garbage.entries()) {
    garbageMinutes = garbageMinutes + garbageItems.length;

    if (index > 0) {
      temptravelMinutes = temptravelMinutes + travel[index - 1];
    }

    for (const garbageItem of garbageItems) {
      travelMinutesMap.set(garbageItem, temptravelMinutes);
    }
  }

  minutes = minutes + garbageMinutes;

  for (const [_, travelMinutes] of travelMinutesMap) {
    minutes = minutes + travelMinutes;
  }

  return minutes;
}

export default garbageCollection;

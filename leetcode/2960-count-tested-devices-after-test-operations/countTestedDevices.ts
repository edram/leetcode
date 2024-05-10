function countTestedDevices(batteryPercentages: number[]): number {
  let count = 0; // 已检测的数量 也代表 检测设备需要扣除的电量

  for (const percentage of batteryPercentages) {
    if (percentage > count) {
      count++;
    }
  }

  return count;
}

export default countTestedDevices;

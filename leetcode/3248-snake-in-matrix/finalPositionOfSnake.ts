function finalPositionOfSnake(n: number, commands: string[]): number {
  const map = {
    UP: -n,
    RIGHT: 1,
    DOWN: n,
    LEFT: -1,
  };

  let position = 0;

  for (const command of commands) {
    const offset = map[command];
    position = position + offset;
  }

  return position;
}

export default finalPositionOfSnake;

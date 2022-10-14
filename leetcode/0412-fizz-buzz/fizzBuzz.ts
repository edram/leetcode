function fizzBuzz(n: number): string[] {
  const result: string[] = [];

  for (let index = 1; index <= n; index++) {
    let item = "";

    if (index % 3 == 0) {
      item = "Fizz";
    }

    if (index % 5 == 0) {
      item = `${item}Buzz`;
    }

    if (item === "") {
      item = `${index}`;
    }

    result.push(item);
  }

  return result;
}

export default fizzBuzz;

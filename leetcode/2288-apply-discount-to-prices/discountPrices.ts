function discountPrices(sentence: string, discount: number): string {
  const words = sentence.split(" ");

  for (const [index, word] of words.entries()) {
    const match = word.match(/^\$(\d+)$/);

    if (match != null) {
      const price = (Number(match[1]) / 100) * (100 - discount);
      words[index] = "$" + price.toFixed(2);
    }
  }
  return words.join(" ");
}

export default discountPrices;

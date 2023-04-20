function bigSorting(unsorted) {
  // Write your code here

  let length = unsorted.length;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - (i + 1); j++) {
      if (BigInt(unsorted[j]) > BigInt(unsorted[j + 1])) {
        let temp = unsorted[j];
        unsorted[j] = unsorted[j + 1];
        unsorted[j + 1] = temp;
      }
    }
  }

  return unsorted;
}

console.log(
  bigSorting([
    1, 2, 100, 111, 200, 3084193741082937, 3084193741082938,
    12303479849857341718340192371,
  ])
);

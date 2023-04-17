function countingSort(arr) {
  const newArray = [...Array(10).fill(0)];

  for (let item of arr) {
    newArray[item] += 1;
  }

  let sortedArray = [];

  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i]) {
      sortedArray.push(...Array(newArray[i]).fill(i));
    }
  }

  console.log(sortedArray);
}

console.log(countingSort([3, 4, 1, 6, 2, 4, 9, 7, 8, 4, 2, 1]));

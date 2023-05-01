function insertionSort(arr) {
  // Write your code here
  let length = arr.length;

  let shift = 0;

  for (let i = 1; i < length; i++) {
    let item = arr[i];

    let j = i - 1;

    while (j >= 0 && arr[j] > item) {
      arr[j + 1] = arr[j];
      j = j - 1;
      shift += 1;
    }

    arr[j + 1] = item;
  }

  return shift;
}

console.log(insertionSort([4, 3, 2, 1]));

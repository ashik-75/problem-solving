function insertionSort(arr) {
  let length = arr.length;

  for (let i = 1; i < length; i++) {
    let item = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > item) {
      arr[j + 1] = arr[j];
      j -= 1;
    }

    arr[j + 1] = item;
  }
}

const array = [10, 8, -11, 2, 3];

insertionSort(array);

console.log(array);

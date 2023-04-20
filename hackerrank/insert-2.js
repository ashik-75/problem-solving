function insertionSort1(n, arr) {
  // Write your code here;

  for (let i = 1; i < n; i++) {
    let item = arr[i];

    let j = i - 1;

    while (j >= 0 && arr[j] > item) {
      arr[j + 1] = arr[j];
      // console.log(arr);
      j--;
    }

    arr[j + 1] = item;
    console.log(arr);
  }

  return arr;
}

console.log(insertionSort1(7, [10, 9, 18, 98, -100, 50, 56]));

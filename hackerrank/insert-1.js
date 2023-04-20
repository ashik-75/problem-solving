function insertionSort1(n, arr) {
  // Write your code here;

  let item = arr[n - 1];

  let j = n - 2;

  while (j >= 0 && arr[j] > item) {
    arr[j + 1] = arr[j];
    j--;
    console.log(arr.join(" "));
  }

  arr[j + 1] = item;

  console.log(arr.join(" "));
}

console.log(insertionSort1(5, [1, 2, 4, 5, 3]));

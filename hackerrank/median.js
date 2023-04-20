function findMedian(arr) {
  // Write your code here

  let length = arr.length;

  for (let i = 1; i < length; i++) {
    let item = arr[i];

    let j = i - 1;

    while (j >= 0 && arr[j] > item) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = item;
  }

  const mid = Math.floor(length / 2);

  //   console.log(arr);

  return arr[mid];

  //   console.log(arr);
}

console.log(findMedian([0, 1, 2, 4, 6, 5, 3]));

function quickSort(arr) {
  if (arr.length < 2) {
    console.log(arr);
    return arr;
  }
  let length = arr.length;
  let left = [];
  let right = [];
  let pivot = arr[length - 1];

  for (let i = 0; i < length - 1; i++) {
    if (arr[i] >= pivot) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

const arr = [-1, -2, 80, 67, 34];

const output = quickSort(arr);

console.log(output);

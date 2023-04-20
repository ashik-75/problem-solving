function quickSort(arr) {
  // Write your code here

  let left = [];
  let right = [];

  let length = arr.length;

  let pivot = arr[0];
  let equal = [pivot];

  for (let i = 1; i < length; i++) {
    if (arr[i] > pivot) {
      right.push(arr[i]);
    } else if (arr[i] === pivot) {
      equal.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }

  //   console.log(arr);

  return [...left, ...equal, ...right];
}

let arr = [3, 2, 4, 5, 7];

console.log(quickSort(arr));

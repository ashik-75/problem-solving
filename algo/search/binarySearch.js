function binarySearch(arr, item) {
  let length = arr.length;

  let left = 0;
  let right = length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === item) {
      return mid;
    } else if (arr[mid] > item) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
}

const res = binarySearch([-10, -5, 1, 7, 9, 15, 36, 77, 88], -11);

console.log(res);

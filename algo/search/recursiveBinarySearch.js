function recursiveBinarySearch(arr, n) {
  return search(arr, n, 0, arr.length - 1);
}

function search(arr, target, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) {
    return -1;
  }

  let mid = Math.floor((leftIndex + rightIndex) / 2);

  //   console.log(mid);
  if (arr[mid] === target) {
    return mid;
  }

  if (arr[mid] < target) {
    return search(arr, target, mid + 1, rightIndex);
  } else {
    return search(arr, target, leftIndex, mid - 1);
  }
}

console.log(recursiveBinarySearch([-10, -5, 1, 7, 9, 15, 36, 77, 88], 88));

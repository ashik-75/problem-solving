function divisible(arr, k) {
  let length = arr.length;
  let count = 0;

  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      if ((arr[i] + arr[j]) % k === 0) {
        count += 1;
      }
    }
  }

  return count;
}

console.log(divisible([1, 2, 3, 4, 5, 6], 5));

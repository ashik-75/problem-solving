function pickingNumbers(a) {
  // Write your code here
  let arr = [...a].sort((a, b) => a - b);
  let length = arr.length;

  let max = 0;

  for (let i = 0; i < length; i++) {
    let count = 0;

    for (let j = i; j < length - 1; j++) {
      let diff = Math.abs(arr[i] - arr[j + 1]);
      if (diff <= 1) {
        count += 1;
      }
    }

    if (count > max) {
      max = count;
    }

    console.log(count);
  }

  return max + 1;
}

console.log(pickingNumbers([1, 2, 2, 3, 1, 2]));

function runningTime(arr) {
  // Write your code here

  let count = 0;

  let length = arr.length;

  for (let i = 1; i < length; i++) {
    let item = arr[i];

    let j = i - 1;

    while (j >= 0 && arr[j] > item) {
      count++;
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = item;
  }

  return count;
}

let arr = [2, 1, 3, 1, 2];

console.log(runningTime(arr));

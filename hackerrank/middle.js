function balancedSums(arr) {
  // Write your code here
  let length = arr.length;
  let index = 0;

  let rightSum = arr.reduce((p, c) => p + c, 0);
  let leftSum = 0;

  //   console.log(rightSum)
  while (index < length) {
    leftSum += arr[index];
    if (leftSum === rightSum) {
      return "YES";
    }

    rightSum -= arr[index];

    index++;
  }

  return "NO";
}

console.log(balancedSums([4, 0, 0]));

function closestNumbers(arr) {
  // Write your code here

  let pairs = [];
  let length = arr.length;

  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      let min = arr[i] < arr[j] ? arr[i] : arr[j];
      let max = arr[i] > arr[j] ? arr[i] : arr[j];
      pairs.push([min, max]);
    }
  }

  const diff = pairs.map((dt) => dt[1] - dt[0]);

  const mini = Math.min(...diff);

  const output = pairs.filter((dt) => dt[1] - dt[0] === mini);

  return output.flat();
}

let arr = [5, 4, 3, 2];

console.log(closestNumbers(arr));

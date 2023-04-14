function birthday(s, d, m) {
  // Write your code here
  let length = s.length;

  let count = 0;

  for (let i = 0; i < length - (m - 1); i++) {
    let slice = s.slice(i, i + m);

    let sum = 0;

    for (let i of slice) {
      sum += i;
    }

    if (sum === d) {
      count += 1;
    }
  }

  return count;
}

let output = birthday([1, 1, 1, 1, 1], 3, 2);

console.log(output);

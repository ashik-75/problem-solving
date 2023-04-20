function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here

  let applesArray = apples
    .map((d) => d + a)
    .filter((dt) => dt >= s && dt <= t).length;
  let orrangeArray = oranges
    .map((d) => d + b)
    .filter((dt) => dt >= s && dt <= t).length;

  return [applesArray, orrangeArray];
  //   console.log({ applesArray, orrangeArray });
}

console.log(countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]));

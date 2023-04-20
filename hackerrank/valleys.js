function countingValleys(steps, path) {
  // Write your code here

  let valyes = 0;
  let count = 0;

  for (let i = 0; i < steps; i++) {
    if (path[i] === "U") {
      count += 1;
    } else {
      count -= 1;
    }

    if (count === 0 && path[i] === "U") {
      valyes += 1;
    }
  }

  return valyes;
}

console.log(countingValleys(8, "UDDDUDUU"));

function migratoryBirds(arr) {
  // Write your code here
  let obj = {};

  for (let i of arr) {
    if (obj[i]) {
      obj[i] = obj[i] + 1;
    } else {
      obj[i] = 1;
    }
  }

  let max = Math.max(...Object.values(obj));

  //   console.log(obj)

  for (let [key, value] of Object.entries(obj)) {
    if (value === max) {
      return key;
    }
  }
}

console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]));

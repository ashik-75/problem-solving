function sockMerchant(n, ar) {
  // Write your code here

  let object = {};
  let count = 0;

  for (let item of ar) {
    if (object[item]) {
      object[item] += 1;
    } else {
      object[item] = 1;
    }
  }

  for (let item of Object.values(object)) {
    count += Math.floor(item / 2);
  }

  return count;
}

sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);

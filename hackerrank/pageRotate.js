function pageCount(n, p) {
  // Write your code here

  if (n === p) {
    return 0;
  }

  let fromStart = Math.floor(p / 2);
  let fromEnd =
    n % 2 === 0 ? Math.ceil((n - p) / 2) : Math.ceil((n - 1 - p) / 2);
  //   let fromEnd = n % 2 === 0 ? Math.floor()

  //   console.log({fromStart,fromEnd})
  return Math.min(fromEnd, fromStart);
}

// console.log((73201- 57075) / 2)

console.log(pageCount(73201, 57075));

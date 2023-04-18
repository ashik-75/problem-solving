function staircase(n) {
  if (n === 1 || n === 0) {
    return 1;
  }

  return staircase(n - 1) + staircase(n - 2);
}

console.log(staircase(5));

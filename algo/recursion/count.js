function counting(n) {
  console.log({ n });
  if (n === 5) {
    return 5;
  }

  return n + counting(n - 1);
}

console.log(counting(10));

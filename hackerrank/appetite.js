function bonAppetit(bill, k, b) {
  // Write your code here

  const filteredAmount = bill
    .filter((item, index) => index !== k)
    .reduce((p, c) => p + c, 0);
  let perPerson = filteredAmount / 2;
  // console.log(filteredAmount,perPerson)

  if (perPerson === b) {
    return "Bon Appetit";
  } else {
    return b - perPerson;
  }
}

console.log(bonAppetit([3, 10, 2, 9], 1, 12));

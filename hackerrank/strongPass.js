function minimumNumber(n, password) {
  // Return the minimum number of characters to make the password strong
  let numbers = "0123456789";
  let lower_case = "abcdefghijklmnopqrstuvwxyz";
  let upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let special_characters = "!@#$%^&*()-+";

  let number = 0;
  let lower = 0;
  let upper = 0;
  let special = 0;

  for (let t of password) {
    if (numbers.includes(t)) {
      number += 1;
    } else if (lower_case.includes(t)) {
      lower += 1;
    } else if (upper_case.includes(t)) {
      upper += 1;
    } else if (special_characters.includes(t)) {
      special += 1;
    }
  }

  let itemNeeded = 0;

  if (number === 0) itemNeeded += 1;
  if (lower === 0) itemNeeded += 1;
  if (upper === 0) itemNeeded += 1;
  if (special === 0) itemNeeded += 1;

  if (n + itemNeeded < 6) {
    return (itemNeeded += 6 - (n + itemNeeded));
  }

  return itemNeeded;
}

console.log(minimumNumber(11, "#HackerRank"));

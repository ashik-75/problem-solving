function superReducedString(s) {
  // Write your code here

  let string = s;

  let i = 0;

  while (i < string.length - 1) {
    if (string[i] === string[i + 1]) {
      string = string.substring(0, i) + string.substring(i + 2);
      i = Math.max(0, i - 1);
    } else {
      i++;
    }
  }

  return string.length === 0 ? "Empty String" : string;
}

console.log(superReducedString("abbaikki"));

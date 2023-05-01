function hackerrankInString(s) {
  // Write your code here

  let rank = ["h", "a", "c", "k", "e", "r", "r", "a", "n", "k"];

  let index = 0;

  for (let i in s) {
    if (s[i] === rank[index]) {
      index += 1;
    }
  }
  return rank.length === index ? "YES" : "NO";
}

console.log(hackerrankInString("hackerworld"));

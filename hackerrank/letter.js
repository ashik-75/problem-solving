function appendAndDelete(s, t, k) {
  // Write your code here
  let length = t.length;

  let longest = 0;

  for (let i = 0; i < length; i++) {
    if (s[i] === t[i]) {
      longest += 1;
    } else {
      break;
    }
  }

  let sLength = s.length;
  let removeToMatch = sLength - longest;
  let needToMatch = length - longest;
  if (sLength < length) {
    removeToMatch = sLength;
    needToMatch = length;
  }

  return removeToMatch + needToMatch <= k ? "Yes" : "No";
}

console.log(appendAndDelete("y", "yu", 2));

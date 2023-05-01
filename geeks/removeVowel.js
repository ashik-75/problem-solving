function removeVowel(info) {
  //code here
  const arr = [];

  let vowel = "aeiouAEIOU";

  for (let i of info.split("")) {
    if (!vowel.includes(i)) {
      arr.push(i);
    }
  }

  return arr.join("");
}

console.log(removeVowel("<$uo?.*>"));

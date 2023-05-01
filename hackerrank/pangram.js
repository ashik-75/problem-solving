function pangrams(s) {
  // Write your code here

  let letters = [...new Set(s.toLowerCase())].filter((dt) => dt !== " ");

  return letters.length === 26 ? "pangram" : "not pangram";
}

console.log(
  pangrams("NOVmETKPTbYu ftZPEykhjgF GGkdGjWGwW skjPJsea dtwdqcr DERCUgxOxrRgDQbdzL IZjyXs")
);

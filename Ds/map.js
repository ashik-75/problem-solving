const map = new Map([
  ["name", "alex"],
  ["roll", 121],
]);

map.set("country", "USA");

console.log(map);

// console.log(map.entries());
for (let entry of map) {
  console.log(entry[1]);
}

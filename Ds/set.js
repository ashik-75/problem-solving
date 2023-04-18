const set = new Set([5, 4, 6, 7, 10, 11]);
console.log(set.has(10));
console.log(set.size);
console.log(set.keys());
console.log(set);

for (let i of set.entries()) {
  console.log(i);
}

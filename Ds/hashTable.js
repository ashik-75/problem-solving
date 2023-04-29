class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key) {
    let total = 0;

    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }

    return total % this.size;
  }

  insert(key, value) {
    const index = this.hash(key);
    let bucket = this.table[index];

    if (bucket) {
      let sameItem = bucket.find((item) => item[0] === key);

      if (sameItem) {
        this.table[index] = bucket.map((item) =>
          item[0] === key ? (item[1] = value) : item
        );
      } else {
        this.table[index].push([key, value]);
      }
    } else {
      this.table[index] = [[key, value]];
    }
  }

  remove(key) {
    const index = this.hash(key);

    const bucket = this.table[index];

    if (bucket) {
      this.table[index] = bucket.filter((item) => item[0] !== key);
    } else {
      return null;
    }
  }

  get(key) {
    const index = this.hash(key);

    const bucket = this.table[index];

    if (bucket) {
      const item = bucket.find((item) => item[0] === key);

      return item ? `${item[0]} - ${item[1]}` : null;
    } else {
      return null;
    }
  }

  display() {
    console.log(this.table);
    for (let i = 0; i < this.size; i++) {
      let bucket = this.table[i];
      if (bucket) {
        console.log(bucket);
      }
    }
  }
}

const hash = new HashTable(50);

hash.insert("name", "Sairin");
hash.insert("age", 29);
hash.insert("mane", "AKA");
console.log(hash.get("mane"));
hash.remove("name");
hash.display();

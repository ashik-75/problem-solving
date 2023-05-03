class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hashKey(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }

    return total % this.size;
  }

  insert(key, value) {
    const index = this.hashKey(key);
    const items = this.table[index];
    if (items) {
      const sameItem = items.find((item) => item[0] === key);
      if (sameItem) {
        this.table[index] = items.map((item) =>
          item[0] === key ? [key, value] : item
        );
      } else {
        this.table[index].push([key, value]);
      }
    } else {
      this.table[index] = [[key, value]];
    }
  }

  remove(key) {
    const index = this.hashKey(key);
    const bucket = this.table[index];

    if (bucket) {
      this.table[index] = bucket.filter((item) => item[0] !== key);
    } else {
      return null;
    }
  }
  get(key) {
    const index = this.hashKey(key);
    const bucket = this.table[index];

    if (bucket) {
      const item = bucket.find((item) => item[0] === key);
      if (item) {
        return "YES";
      } else {
        return "NO";
      }
    } else {
      return null;
    }
  }

  display() {
    for (let item in this.table) {
      // console.log(item)
      if (this.table[item]) {
        console.log(this.table[item]);
      }
    }
  }
}

const hash = new HashTable(50);

hash.insert("name", "Alex");
hash.insert("mane", "ZARA");
hash.insert("age", "ZARA");
hash.remove("age");
hash.display();

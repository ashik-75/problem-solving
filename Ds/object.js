let object = {
  name: "Alex",
  country: "USA",
  getBio: function () {
    return this.name + " " + this.country;
  },
};

// console.log(object.values())
console.log(Object.entries(object));
console.log(object.getBio());

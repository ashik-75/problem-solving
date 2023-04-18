function cartesian(arr1, arr2) {
  //   console.log(arr1, arr2);
  let lengthA = arr1.length;
  let lengthB = arr2.length;

  let array = [];

  for (let i = 0; i < lengthA; i++) {
    for (let j = 0; j < lengthB; j++) {
      array.push([arr1[i], arr2[j]]);
    }
  }

  return array;
}

console.log(cartesian([1, 3], [5, 6]));

// Big O(mXn)

function bubbleSort(arr) {
  let array = [...arr];
  let length = arr.length;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - (i + 1); j++) {
      if (array[j] > array[j + 1]) {
        let store = array[j];
        array[j] = array[j + 1];
        array[j + 1] = store;
      }
    }
  }

  return array;
}

console.log(bubbleSort([19, 10, 18, -25]));

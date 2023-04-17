function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);

  let leftArray = arr.slice(0, mid);
  let rightArray = arr.slice(mid);

  return merge(mergeSort(leftArray), mergeSort(rightArray));
}

function merge(leftArray, rightArray) {
  let sortedArray = [];
  console.log({ leftArray, rightArray });
  while (leftArray.length && rightArray.length) {
    if (leftArray[0] < rightArray[0]) {
      sortedArray.push(leftArray.shift());
    } else {
      sortedArray.push(rightArray.shift());
    }
  }
  console.log(sortedArray);

  return [...sortedArray, ...leftArray, ...rightArray];
}

let arr = [10, -10, 20, 32, 98, -11];

let output = mergeSort(arr);

console.log(output);

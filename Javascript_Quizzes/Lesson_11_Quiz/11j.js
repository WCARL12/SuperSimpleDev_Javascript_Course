function addArrays(array, array2) {
  for (let i = 0; i <= array.length - 1; i++) {
    array[i] += array2[i];
  }
  console.log(array);
}

addArrays([1, 1, 2], [1, 1, 3]);
addArrays([1, 2, 3], [4, 5, 6]);

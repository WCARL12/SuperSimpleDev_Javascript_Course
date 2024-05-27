function findIndex(array, word) {
  for (let i = 0; i <= array.length - 1; i++) {
    if (array[i] === word) {
      return i;
    }
  }
  return -1;
}
console.log(findIndex(["green", "red", "blue", "red"], "red"));
console.log(findIndex(["green", "red", "blue", "red"], "yellow"));

function unique(array) {
  let uniqueArray = [];

  for (let i = 0; i <= array.length - 1; i++) {
    if (findIndex(uniqueArray, array[i]) === -1) {
      uniqueArray.push(array[i]);
    }
  }
  return uniqueArray;
}

array = ["green", "red", "blue", "red"];

console.log(unique(array));

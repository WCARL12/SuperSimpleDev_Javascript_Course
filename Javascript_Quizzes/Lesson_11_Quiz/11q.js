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

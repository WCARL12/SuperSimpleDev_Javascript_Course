function arraySwap(array) {
  let firstValue = array[0];
  let lasttValue = array[array.length - 1];
  array[0] = lasttValue;
  array[array.length - 1] = firstValue;
  console.log(array);
}

arraySwap([1, 20, 22, 24, 5]);
arraySwap(["hi", "hello", "good"]);

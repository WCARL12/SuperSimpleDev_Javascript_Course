let currentArray = [1, 2, 3];

function addOne(array) {
  let addOneArray = [];
  for (let i = 0; i <= array.length - 1; i++) {
    addOneArray.push(array[i] + 1);
  }

  console.log(addOneArray);
}

addOne(currentArray);
addOne([-2, -1, 0, 99]);

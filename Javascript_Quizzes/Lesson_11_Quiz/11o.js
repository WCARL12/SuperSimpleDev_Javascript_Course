// let array = ["hello", "world", "search", "good"];
let array = ["not", "found"];

for (let i = 0; i <= array.length - 1; i++) {
  if (array[i] === "search") {
    console.log(i);
    break;
  } else if (i === array.length - 1) {
    console.log(-1);
  }
}

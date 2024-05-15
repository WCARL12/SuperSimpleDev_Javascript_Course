function convertLength(length, from, to) {
  if (from === to) {
    return `${length} ${to}`;
  } else if (from === "miles" && to === "km") {
    return `${length * 1.6} ${to}`;

  } else if (from === "miles" && to === "ft") {
    return `${length * 1.6 * 3281} ${to}`;
    
  } else if (from === "km" && to === "miles") {
    return `${length / 1.6} ${to}`;
  } else if (from === "km" && to === "ft") {
    return `${length * 3281} ${to}`;
  } else if (from === "ft" && to === "miles") {
    return `${from / 3281 / 1.6} ${to}`;
  } else if (from === "ft" && to === "km") {
    return `${from / 3281} ${to}`;
  }
}

console.log(convertLength(5, "miles", "km"));
console.log(convertLength(5, "miles", "ft"));
console.log(convertLength(5, "km", "ft"));

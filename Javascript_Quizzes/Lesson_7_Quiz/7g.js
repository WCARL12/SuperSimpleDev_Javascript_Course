function convertLength(length, from, to) {
  if (from === to) {
    return `${length} ${to}`;
  } else if (from === "miles") {
    return `${length * 1.6} ${to}`;
  } else {
    return `${length / 1.6} ${to}`;
  }
}

console.log(convertLength(32, "km", "miles"));

function removeEgg(foods) {
  noEggArray = [];
  for (let i = 0; i <= foods.length - 1; i++) {
    if (foods[i] != "egg") {
      noEggArray.push(foods[i]);
    }
  }
  console.log(noEggArray);
}

removeEgg(["egg", "apple", "egg", "egg", "ham"]);

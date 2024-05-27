function removeEgg(foods) {
  noEggArray = foods.slice();
  noEggArray.reverse();
  eggCounter = 0;

  for (let i = 0; i <= noEggArray.length - 1; i++) {
    if (eggCounter < 2 && noEggArray[i] === "egg") {
      noEggArray.splice(i, 1);
      eggCounter += 1;
      i--;
    }
  }

  noEggArray.reverse();
  console.log(noEggArray);
  console.log(foods);
}

removeEgg(["egg", "apple", "egg", "egg", "ham"]);

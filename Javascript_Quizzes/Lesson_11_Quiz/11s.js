function removeEgg(foods) {
  eggCounter = 0;
  for (let i = 0; i <= foods.length - 1; i++) {
    if (eggCounter <= 2 && foods[i] === "egg") {
      foods.splice(i, 1);
      eggCounter += 1;
    }
  }
  console.log(foods);
}

removeEgg(["egg", "apple", "egg", "egg", "ham"]);

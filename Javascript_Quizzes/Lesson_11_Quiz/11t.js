function removeEgg(foods) {
  // console.log(`Foods array before reverse:\n ${foods}`);
  // console.log(``);
  foods.reverse();
  // console.log(`Foods array after reverse:\n ${foods}`);

  eggCounter = 0;

  for (let i = 0; i <= foods.length - 1; i++) {
    // console.log(i);
    // console.log(`Loop No.${i}:\n${foods}\n`);
    if (eggCounter < 2 && foods[i] === "egg") {
      foods.splice(i, 1);
      eggCounter += 1;
      i--;
    }
    // console.log(`Array after loop: (${foods})\n`);
  }

  foods.reverse();
  console.log(foods);
}

removeEgg(["egg", "apple", "egg", "egg", "ham"]);

// function countWords(words) {
//   let countWordsArray = {

//   };
//   for (let i = 0; i <= words.length - 1; i++) {
//     if (!words[i] in countWordsArray){
//         console.log
//     }
//   }
//   return countWordsArray;
// }
// array = ["apple", "grape", "apple", "apple"];

function countWordsArray(words) {
  const obj = {};

  for (let i = 0; i <= words.length - 1; i++) {
    if (!(words[i] in obj)) {
      obj[words[i]] = 1;
    } else if (words[i] in obj) {
      obj[words[i]] += 1;
    }
  }
  console.log(obj);
}

countWordsArray(["apple", "grape", "apple", "apple"]);

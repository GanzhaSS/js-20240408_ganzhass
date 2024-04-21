/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
function trimSymbols(string, size) {
  let newStr = "";
  countSameLetter = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i + 1]) {
      countSameLetter++;
      //   console.log(string[i]);
      //   console.log(countSameLetter);
      if (countSameLetter < size) {
        newStr += string[i];
        // console.log(newStr);
      }
    } else {
      newStr += string[i];
      countSameLetter = 1;
    }
  }
  return newStr;
}

// trimSymbols("x", 3); // 'xxx' - ничего не удалили т.к разрешено 3 символа подряд

console.log(trimSymbols("ффффффффоооооooooooo", 3)); // 'xx' - удалили один символ
// trimSymbols("xxx", 1); // 'x'

// trimSymbols("xxxaaaaa", 2); // 'xxaa'
// trimSymbols("xxxaaaaab", 3); // 'xxxaaab'

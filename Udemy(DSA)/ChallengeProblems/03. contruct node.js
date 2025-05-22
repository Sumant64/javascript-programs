/**
 * Frequency Counter - constructNote
Write a function called constructNote, which accepts two strings, a message and some letters. The function should return true if the message can be built with the letters that you are given, or it should return false.

Assume that there are only lowercase letters and no space or special characters in both the message and the letters.

Bonus Constraints:

If M is the length of message and N is the length of letters:

Time Complexity: O(M+N)

Space Complexity: O(N)

Examples:

constructNote('aa', 'abc') // false
constructNote('abc', 'dcba') // true
constructNote('aabbcc', 'bcabcaddff') // true
 */

function isAlphaNumeric(char) {
  let code = char.charCodeAt(0);
  if (
    // !(code > 47 && code < 58) && // numeric (0-9)
    !(code > 64 && code < 91) && // upper alpha (A-Z)
    !(code > 96 && code < 123) // lower alpha (a - z)
  ) {
    return false;
  }

  return true;
}

function constructNote(str1, str2) {
  // add whatever parameters you deem necessary - good luck!
  if (str1.length > str2.length) return false;

  let obj2 = {};
  for (let i = 0; i < str2.length; i++) {
    if (isAlphaNumeric(str2[i])) {
      obj2[str2[i].toLowerCase()] = obj2[str2[i].toLowerCase()] + 1 || 1;
    }
  }

  for(let i = 0; i < str1.length; i++) {
    if(isAlphaNumeric(str1[i])) {
        if(!obj2[str1[i]] || obj2[str1[i]] <= 0) {
            return false
        };
        obj2[str1[i].toLowerCase()] = obj2[str1[i].toLowerCase()] - 1;
    }
  }

  return true;
}

console.log(constructNote('aa', 'abca'))
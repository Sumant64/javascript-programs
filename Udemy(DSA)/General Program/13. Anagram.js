// Anagram using frequency counter

/**
 * Anagrams:
 * o Given two strings, write a function to determine if the second string is an anagram
 * of the first. An anagram is a word, phrase, or name formed by rearranging the 
 * letters of another, such as cinema, formed from iceman.
 * 
 * Example input and output:
 * validAnagram("", "") // true
 * validAnagram("aaz", "zza") //false
 * validAnagram("anagram", "nagaram") // true
 * validAnagram("rat", "car") // false
 * validAnagram("awesome", "awesom") //false
 * validAnagram("qwerty", "qeywrt") //true
 */

function validAnagram (first, second) {
    if(first.length !== second.length) {
        return false;
    }

    const lookup = {};

    for(let i = 0; i < first.length; i++) {
        let letter = first[i];
        //if letter exists, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }

    for(let i = 0; i < second.length; i++) {
        let letter = second[i];
        //can't find letter or letter is zero then it's not an anagram
        if(!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }

    return true;
}

const res = validAnagram("aaz", "zza")
console.log(res);
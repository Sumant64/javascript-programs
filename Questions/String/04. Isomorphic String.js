// Isomorphic Strings

/**
 * Two strings s and t are isomorphic if the characters in s can be replaced to get t, with a one-to-one mapping.:-
       o Each character must map to another single character.
       o No two characters can map to the same character, but a character can map to itself.
    
       o Example
       s = "egg"
       t = "add"

        Step-by-step Mapping:
            'e' maps to 'a'
            'g' maps to 'd'

        The second 'g' again maps to 'd'
            This is valid because:
            Mapping is consistent (e→a, g→d)
            No character maps to two different characters
    
    o Example non isomorphic
        s = "foo"
        t = "bar"
        Step-by-step Mapping:
            'f' → 'b'
            'o' → 'a'
        Second 'o' → 'r' → conflict!
    
 */

const isIsomorphic = (s, t) => {
    if(s.length !== t.length) return false;

    const mapS = {};
    const mapT = {};

    for(let i = 0; i < s.length; i++) {
        if(mapS[s[i]] !== mapT[t[i]]) return false;

        mapS[s[i]] = i;
        mapT[t[i]] = i;
    }
    console.log(mapS);
    console.log(mapT)

    return true;
}

console.log(isIsomorphic("paper", "title"))

/**
{ p: 2, a: 1, e: 3, r: 4 }
{ t: 2, i: 1, l: 3, e: 4 }

we are doing the value of characters as same
p --> 0
t --> 0

a-->1
i--1

p -- 2
t -- 2

e -- 3
l -- 3

we can observe that corresponding characters numbers become same.

 */
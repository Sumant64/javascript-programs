// Check whether the string is palindrome or not

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str){
    let i = 0;
    let j = str.length-1;
    let palindromeCheck = true;
    console.log(str)
    
    while(i<j){
        if(str[i] != str[j]){
            palindromeCheck = false;
            break;
        }
        i++;
        j--;
    }
    
    return palindromeCheck;
}

const pal = isPalindrome('tacocat');
console.log(pal)
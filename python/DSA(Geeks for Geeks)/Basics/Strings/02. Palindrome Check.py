# // Palindrome check

# /**
#  * I/P: str = "ABCDCBA"
#  * O/P: yes
#  * 
#  * I/P: str = "ABBA"
#  * O/P: yes
#  * 
#  * I/P: str = "geeksforgeeks"
#  * O/P: No
#  */


def isPalindrome (str) :
    low = 0
    high = len(str) - 1
    while(low < high):
        if not str[low] == str[high] :
            return False
        low += 1
        high -= 1

    return True


print(isPalindrome("abac"))

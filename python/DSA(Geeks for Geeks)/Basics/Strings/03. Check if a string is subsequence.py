# // Check if a string is subsequence of other

# /**
#  * I/P: s1 = "ABCD"
#  *      s2 = "AD"
#  * O/P: true
#  * 
#  * I/P: s1 = "ABCDE"
#  *      s2 = "AED"
#  * O/P: false
#  * 
#  * o All subsequences of "ABC" are:
#  * "", "A", "B", "C", "AB", "BC", "AC", 'ABC'
#  * O No of substring: 2^n
# */


def isSubsequence(str1, str2) :
    i = 0
    j = 0
    while(i < len(str1) and j < len(str2)) :
        if str1[i] == str2[j] :
            j += 1
        i += 1
    
    return j == len(str2)


print(isSubsequence("ABCDE", "AED"))
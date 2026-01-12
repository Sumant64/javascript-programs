# // Check for Anagrasm

# /**
#  * I/P: s1 = "listen", s2 = "silent"
#  * O/P: yes
#  * 
#  * I/P: s1 = "aaacb", s2 = "cabaa"
#  * O/P: yes
#  * 
#  * I/P: s1 = "aab", s2 = "bab"
#  * O/P: no
#  * 
#  */

def anagram(str1, str2) :
    if len(str1) != len(str2) :
        return False
    
    count = [0] * 256

    for i in range(len(str1)):
        count[ord(str1[i])] += 1
        count[ord(str2[i])] -= 1

    for i in count:
        if i != 0:
            return False
        
    return True

print(anagram("listen", "silent"))
# isPalindrome('amanaplanacanalpanama') // true
# isPalindrome('amanaplanacanalpandemonium') // false

def isPalindrome (str):
    listWord = list(str)
    start = 0
    end = len(listWord) - 1
    while start <= end:
        if(listWord[start] != listWord[end]):
            return False
        start += 1
        end -= 1

    return True

print(isPalindrome('amanaplanacanalpandemonium'))
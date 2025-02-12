'''
/*
Write a recursive function called someRecursive which accepts an array and a callback. 
The function returns true if a single value in the array returns true when passed to the 
callback. Otherwise it returns false.
*/

// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false
'''

def isOdd(val):
    if (val % 2) != 0:
        return True
    
def someRecursive(arr, callFun):
    isOddCheck = False
    for i in range(len(arr)):
        checkVal = callFun(arr[i])
        if checkVal == True:
            isOddCheck = True
            break
    
    return isOddCheck

check = someRecursive([2, 4, 3], isOdd)
print(check)
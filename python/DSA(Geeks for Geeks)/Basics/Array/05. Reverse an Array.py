# // Reverse an array

# /**
#  * I/P: arr = [10, 5, 7, 30]
#  * O/P: arr = [30, 7, 5, 10]
#  * 
#  * I/P: arr = [30, 20, 10]
#  * O/P: arr = [10, 20, 30]
#  * 
#  * I/P: arr = [10]
#  * O/P: arr = [10]
#  */

def reverse (arr) :
    low = 0
    high = len(arr) - 1

    while(low < high) :
        temp = arr[low]
        arr[low] = arr[high]
        arr[high] = temp
        low = low + 1
        high = high - 1

    return arr

print(reverse([10, 5, 7, 30]))

# ============================================

def reverseAlt (arr) :
    low = 0
    high = len(arr) - 1

    while(low < high) :
        arr[low] , arr[high] = arr[high] , arr[low]
        low = low + 1
        high = high - 1

    return arr

print(reverseAlt([10, 5, 7, 30]))
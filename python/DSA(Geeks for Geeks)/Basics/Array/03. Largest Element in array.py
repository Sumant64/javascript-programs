# // Largest Element in an array

# /**
#  * I/P: arr = [10, 5, 20, 8]
#  * O/P: 2 // Index of 20
#  * 
#  * I/P: arr = [30]
#  * O/P: 0 // Index of 30
#  * 
#  * I/P: arr = [20, 8, 40, 10, 40]
#  * O/P: 2 // Index of first 40
#  */
# //======================================

def largest (arr) :
    largest = arr[0]
    for num in arr:
        if num > largest:
            largest = num
    return largest

print(largest([1, 2, 3]))

# ===========================================
# Using Range

def largestIndex (arr) :
    largest = 0

    for i in range(len(arr)) :
        if arr[i] > arr[largest] :
            largest = i

    return largest

print(largestIndex([1, 2, 3]))

# ============================================
# Using Enumerate

def largestEnumerate (arr) :
    largest = 0

    for index, value in enumerate(arr) :
        if(arr[index] > arr[largest]) :
            largest = index

    return largest

print(largestEnumerate([1, 2, 3]))
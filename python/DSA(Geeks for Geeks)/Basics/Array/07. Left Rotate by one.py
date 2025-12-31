# // Left rotate by One

# /**
#  * I/P: arr = [1, 2, 3, 4, 5]
#  * O/P: arr = [2, 3, 4, 5, 1]
#  * 
#  * I/P: arr = [30, 5, 20]
#  * O/P: arr = [5, 20, 30]
#  * 
#  * I/P: arr = [10]
#  * O/P: arr = [10]
#  */


def leftRotateOne(arr) :
    temp = arr[0]
    for i in range(1, len(arr)) : 
        arr[i - 1] = arr[i]

    arr[len(arr) - 1] = temp

    return arr

print(leftRotateOne([1, 2, 3, 4, 5]))
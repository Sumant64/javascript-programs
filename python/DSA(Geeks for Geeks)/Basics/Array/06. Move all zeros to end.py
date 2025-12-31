# // Move all zeros to end in array

# /**
#  * I/P: arr = [8, 0, 5, 0, 0, 7]
#  * O/P: arr = [8, 5, 7, 0, 0, 0]
#  * 
#  * I/P: arr = [0, 0, 9, 0]
#  * O/P: arr = [9, 0, 0, 0]
#  * 
#  * I/P: arr = [10, 20]
#  * O/P: arr = [10, 20]
#  */

def moveZeros(arr) :
    count = 0
    for i in range(len(arr)) :
        if not (arr[i] == 0):
            arr[i], arr[count] = arr[count], arr[i]
            count += 1

    return arr

print(moveZeros([8, 0, 5, 0, 0, 7]))
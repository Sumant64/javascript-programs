# // Check if the array is sorted or not

# /**
#  * I/P: arr[] = [8, 12, 15]
#  * O/P: yes
#  * 
#  * I/P: arr[] = [8, 10, 10, 12]
#  * O/P: yes
#  * 
#  * I/P: arr[] = [100]
#  * O/P: yes
#  * 
#  * I/P: arr[] = [100, 20, 200]
#  * O/P: No
#  */


def isSorted(arr) :
    for i in range(1, len(arr)) :
        if(arr[i] < arr[i - 1]) :
            return False
        
    return True

print(isSorted([8, 7, 10, 10, 12]))
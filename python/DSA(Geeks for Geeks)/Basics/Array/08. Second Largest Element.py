# // Second largest element in an array

def secondLargestElement(arr) :
    largest = float('-inf')
    second = float('-inf')
    for i in range(len(arr)) :
        if arr[i] > largest :
            second = largest
            largest = arr[i]

        if arr[i] > second and arr[i] < largest :
            second = arr[i]

    return {
        'largest': largest, 
        'second': second
        }



print(secondLargestElement([1, 2, 3, 4, 5]))



    

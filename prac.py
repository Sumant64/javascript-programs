
from numbers import Number
import math


def secondLargest(arr):
    largest = float('-inf')
    second = float('-inf')
    for i in range(len(arr)):
        if(arr[i] > largest):
            second = largest
            largest = arr[i]
        
        if(arr[i] < largest and arr[i] > second):
            second = arr[i]
    return {
        'largest' : largest, 
        'second': second
        }

print(secondLargest([1, 2, 20, 13, 17, 88]))


'''
/*
Question:
---------
Write a function called capitalizeFirst. 
Given an array of strings, capitalize the first letter of 
each string in the array.
*/

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

'''

def capitalizeFirst(arr):
    capitalizeArr = []
    for i in range(len(arr)):
        word = arr[i]
        capitalizeWord = word[0:1].upper() + word[1:]
        capitalizeArr.append(capitalizeWord)

    return capitalizeArr

print(capitalizeFirst(['car','taco','banana']))
# write a function to reverse a string

def reverse(str):
    listWord = list(str)
    start = 0
    end = len(listWord) - 1
    while start <= end:
        temp = listWord[start]
        listWord[start] = listWord[end]
        listWord[end] = temp

        start += 1
        end -= 1
    return ''.join(listWord)

print(reverse("hello"))
print(reverse("sumant shah"))
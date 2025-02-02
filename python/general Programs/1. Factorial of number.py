# Factorial of a number

def factorial(num) :
    total = 1
    for i in range(1, num + 1):
        total *= i

    return total


fact = factorial(5)
print(fact)
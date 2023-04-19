def factorial(number):

    if number == 0:
        result = 1
    elif number == 1:
        result = 1
    elif number >= 2:
        result = number * factorial(number-1)

    return result

number = int(input())
print(factorial(number))
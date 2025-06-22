def operation(a, b, code):
    match code:
        case 1:
            return a + b
        case 2:
            return a - b
        case 3:
            return a * b
        case _:
            return 0


print(operation(10, 5, 1))  # 15
print(operation(10, 5, 2))  # 5
print(operation(10, 5, 3))  # 50
print(operation(10, 5, 4))  # 0
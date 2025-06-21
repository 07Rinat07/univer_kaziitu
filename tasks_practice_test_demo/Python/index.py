import math

# возведение числа 2 в степень 3
n1 = math.pow(2, 3)
print(n1)  # 8

# ту же самую операцию можно выполнить так
n2 = 2 ** 3
print(n2)

# квадратный корень числа
print(math.sqrt(9))  # 3

# ближайшее наибольшее целое число
print(math.ceil(4.56))  # 5

# ближайшее наименьшее целое число
print(math.floor(4.56))  # 4

# перевод из радиан в градусы
print(math.degrees(3.14159))  # 180

# перевод из градусов в радианы
print(math.radians(180))  # 3.1415.....
# косинус
print(math.cos(math.radians(60)))  # 0.5
# cинус
print(math.sin(math.radians(90)))  # 1.0
# тангенс
print(math.tan(math.radians(0)))  # 0.0

print(math.log(8, 2))  # 3.0
print(math.log10(100))  # 2.0
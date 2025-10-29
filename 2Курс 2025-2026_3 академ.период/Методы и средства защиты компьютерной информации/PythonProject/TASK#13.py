# Лекция 13: Функции и рекурсия

# 1. Функции
# Функции — это блоки кода, которые выполняются только при вызове.
# Они могут принимать параметры и возвращать значения.

# Пример встроенных функций:
from math import sqrt

print("Квадратный корень из 16:", sqrt(16))  # 4.0
print("Длина строки 'Python':", len("Python"))  # 6
print("Вывод текста:", print("Привет, мир!"))  # None (print ничего не возвращает)

# 2. Локальные и глобальные переменные

x = 10  # глобальная переменная

def demo_scope():
    x = 5  # локальная переменная
    print("Локальное значение x:", x)

demo_scope()
print("Глобальное значение x:", x)

# 3. Рекурсия
# Рекурсивная функция вызывает саму себя

def factorial(n):
    if n == 0 or n == 1:
        return 1
    else:
        return n * factorial(n - 1)

print("Факториал 5:", factorial(5))  # 120

# ----------------------------------------
# Пример 1: Открытие и сохранение файла с Tkinter
# ----------------------------------------

from tkinter import *
from tkinter import filedialog as fd

def insert_text():
    file_name = fd.askopenfilename()
    with open(file_name) as f:
        s = f.read()
    text.insert(1.0, s)

def extract_text():
    file_name = fd.asksaveasfilename(
        filetypes=(("TXT files", "*.txt"),
                   ("HTML files", "*.html;*.htm"),
                   ("All files", "*.*")))
    with open(file_name, 'w') as f:
        s = text.get(1.0, END)
        f.write(s)

root = Tk()
root.title("Функции и файлы")
root.geometry("400x300")

text = Text(width=50, height=15)
text.grid(columnspan=2)

b1 = Button(text="Открыть", command=insert_text)
b1.grid(row=1, sticky=E)

b2 = Button(text="Сохранить", command=extract_text)
b2.grid(row=1, column=1, sticky=W)

root.mainloop()

# Пояснение:
# - insert_text() открывает файл и вставляет содержимое в текстовое поле.
# - extract_text() сохраняет содержимое текстового поля в файл.

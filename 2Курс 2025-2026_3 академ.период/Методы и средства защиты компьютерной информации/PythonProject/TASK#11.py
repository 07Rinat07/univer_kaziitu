# Лекция 11–12: Списки

# 1. Списки (одномерные массивы)
Primes = [2, 3, 5, 7, 11, 13]
print("Первый элемент:", Primes[0])       # 2
print("Второй элемент:", Primes[1])       # 3
print("Последний элемент:", Primes[-1])   # 13
print("Длина списка:", len(Primes))       # 6

# Отрицательные индексы:
print("Предпоследний элемент:", Primes[-2])  # 11

# 2. Методы разделения и объединения
text = "Python, Java, C++"
languages = text.split(", ")  # Разделение строки на список
print("Результат split():", languages)  # ['Python', 'Java', 'C++']

new_text = ", ".join(languages)  # Объединение списка в строку
print("Результат join():", new_text)  # 'Python, Java, C++'

# 3. Генераторы списков
squares = [x**2 for x in range(10)]  # Квадраты чисел от 0 до 9
print("Квадраты чисел:", squares)  # [0, 1, 4, ..., 81]

# 4. Срезы
subset = Primes[1:4]  # Элементы с индексами 1, 2, 3
print("Срез списка:", subset)  # [3, 5, 7]

# Пример с Tkinter: Поле ввода и окно сообщения
from tkinter import *
from tkinter import messagebox

def f1():
    messagebox.showinfo("Сообщение", message.get())

root = Tk()
root.title("Python")
root.geometry("300x250")

message = StringVar()
message_entry = Entry(textvariable=message)
message_entry.place(relx=.5, rely=.1, anchor="c")

message_button = Button(text="Нажми меня", command=f1)
message_button.place(relx=.5, rely=.5, anchor="c")

root.mainloop()

# Как работает программа:
# 1. Пользователь вводит текст в поле Entry.
# 2. При нажатии кнопки "Нажми меня" введённый текст отображается в диалоговом окне.

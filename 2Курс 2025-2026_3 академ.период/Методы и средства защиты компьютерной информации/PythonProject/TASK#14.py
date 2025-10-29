from tkinter import *
from tkinter import filedialog as fd

# 🔹 Глобальная переменная
global_counter = 0

# 🔹 Функция для открытия файла и вставки текста
def insert_text():
    file_name = fd.askopenfilename()
    if file_name:
        with open(file_name, 'r', encoding='utf-8') as f:
            content = f.read()
        text.insert(1.0, content)

# 🔹 Функция для сохранения текста в файл
def extract_text():
    file_name = fd.asksaveasfilename(
        filetypes=(("TXT files", "*.txt"),
                   ("HTML files", "*.html;*.htm"),
                   ("All files", "*.*")))
    if file_name:
        with open(file_name, 'w', encoding='utf-8') as f:
            content = text.get(1.0, END)
            f.write(content)

# 🔹 Функция с локальной переменной
def show_local_variable():
    local_message = "Это локальная переменная"
    text.insert(END, f"\n{local_message}")

# 🔹 Функция, изменяющая глобальную переменную
def increment_global():
    global global_counter
    global_counter += 1
    text.insert(END, f"\nГлобальный счётчик: {global_counter}")

# 🔹 Рекурсивная функция: вычисление факториала
def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n - 1)

def show_factorial():
    try:
        n = int(entry.get())
        result = factorial(n)
        text.insert(END, f"\nФакториал {n} = {result}")
    except ValueError:
        text.insert(END, "\nВведите целое число")

# 🔹 Интерфейс
root = Tk()
root.title("Функции и рекурсия")

text = Text(width=60, height=20)
text.grid(row=0, column=0, columnspan=4, padx=10, pady=10)

entry = Entry(width=10)
entry.grid(row=1, column=0, padx=5)

Button(text="Открыть файл", command=insert_text).grid(row=1, column=1)
Button(text="Сохранить файл", command=extract_text).grid(row=1, column=2)
Button(text="Локальная переменная", command=show_local_variable).grid(row=2, column=0)
Button(text="Глобальный счётчик", command=increment_global).grid(row=2, column=1)
Button(text="Факториал", command=show_factorial).grid(row=2, column=2)

root.mainloop()

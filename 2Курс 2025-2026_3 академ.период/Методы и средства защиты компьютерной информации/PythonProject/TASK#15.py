from tkinter import *
from tkinter import filedialog as fd

# 🔹 Функция для открытия файла и вставки содержимого в текстовое поле
def insert_text():
    file_name = fd.askopenfilename()
    if file_name:
        with open(file_name, 'r', encoding='utf-8') as f:
            s = f.read()
        text.delete(1.0, END)
        text.insert(1.0, s)

# 🔹 Функция для сохранения содержимого текстового поля в файл
def extract_text():
    file_name = fd.asksaveasfilename(
        filetypes=(("TXT files", "*.txt"),
                   ("HTML files", "*.html;*.htm"),
                   ("All files", "*.*")))
    if file_name:
        with open(file_name, 'w', encoding='utf-8') as f:
            s = text.get(1.0, END)
            f.write(s)

# 🔹 Преобразование текста в двумерный список
def parse_matrix():
    lines = text.get(1.0, END).strip().split('\n')
    matrix = []
    for line in lines:
        row = list(map(int, line.strip().split()))
        matrix.append(row)
    return matrix

# 🔹 Преобразование двумерного списка в текст
def matrix_to_text(matrix):
    return '\n'.join(' '.join(map(str, row)) for row in matrix)

# 🔹 Обработка матрицы: главная диагональ = 1, выше = 0, ниже = 2
def process_matrix():
    try:
        matrix = parse_matrix()
        n = len(matrix)
        for i in range(n):
            for j in range(n):
                if i == j:
                    matrix[i][j] = 1
                elif i < j:
                    matrix[i][j] = 0
                else:
                    matrix[i][j] = 2
        text.delete(1.0, END)
        text.insert(1.0, matrix_to_text(matrix))
    except Exception as e:
        text.insert(END, f"\nОшибка обработки: {e}")

# 🔹 Генерация пустой квадратной матрицы n x n
def generate_matrix():
    try:
        n = int(entry.get())
        matrix = [[0 for _ in range(n)] for _ in range(n)]
        text.delete(1.0, END)
        text.insert(1.0, matrix_to_text(matrix))
    except ValueError:
        text.insert(END, "\nВведите целое число")

# 🔹 Интерфейс
root = Tk()
root.title("Двумерные массивы")

text = Text(width=50, height=15)
text.grid(row=0, column=0, columnspan=4, padx=10, pady=10)

entry = Entry(width=5)
entry.grid(row=1, column=0, padx=5)

Button(text="Генерировать n x n", command=generate_matrix).grid(row=1, column=1)
Button(text="Обработать матрицу", command=process_matrix).grid(row=1, column=2)
Button(text="Открыть", command=insert_text).grid(row=2, column=1, pady=5)
Button(text="Сохранить", command=extract_text).grid(row=2, column=2)

root.mainloop()

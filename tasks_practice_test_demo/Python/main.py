people = [
    ["Tom", 29],
    ["Alice", 33],
    ["Bob", 27]
]

# создание вложенного списка
person = list()
person.append("Bill")
person.append(41)
# добавление вложенного списка
people.append(person)

print(people[-1])  # ["Bill", 41]

# добавление во вложенный список
people[-1].append("+79876543210")

print(people[-1])  # ["Bill", 41, "+79876543210"]

# удаление последнего элемента из вложенного списка
people[-1].pop()
print(people[-1])  # ["Bill", 41]

# удаление всего последнего вложенного списка
people.pop(-1)

# изменение первого элемента
people[0] = ["Sam", 18]
print(people)  # [ ["Sam", 18], ["Alice", 33], ["Bob", 27]]
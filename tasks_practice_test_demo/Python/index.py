class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age


def enter(person):
    match person:
        case Person(name=name, age=age) if age < 18:
            print(f"{name}, доступ запрещен")
        case Person(name=name):
            print(f"{name}, добро пожаловать!")
# Guard или ограничения шаблонов позволяют установить дополнительные условия, которым должно соответсвовать выражение.
# Ограничение задается сразу после шаблона с помощью ключевого слова if, после которого идет условие ограничения:

enter(Person("Tom", 37))  # Tom, добро пожаловать!
enter(Person("Sam", 12))  # Sam, доступ запрещен
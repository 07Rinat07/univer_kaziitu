class Person:
    def __init__(self, name, age):
        self.__name = name  # устанавливаем имя
        self.__age = age  # устанавливаем возраст

    def print_person(self):
        print(f"Имя: {self.__name}\tВозраст: {self.__age}")


tom = Person("Tom", 39)
tom._Person__name = "Человек-паук"  # изменяем атрибут __name
tom.print_person()  # Имя: Человек-паук        Возраст: 39
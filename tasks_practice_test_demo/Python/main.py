class Person:
    def __init__(self, name, age):
        self.__name = name  # устанавливаем имя
        self.__age = age  # устанавливаем возраст

    # свойство-геттер
    @property
    def age(self):
        return self.__age

    # свойство-сеттер
    @age.setter
    def age(self, age):
        if 0 < age < 110:
            self.__age = age
        else:
            print("Недопустимый возраст")

    @property
    def name(self):
        return self.__name

    def print_person(self):
        print(f"Имя: {self.__name}\tВозраст: {self.__age}")


tom = Person("Tom", 39)
tom.print_person()  # Имя: Tom  Возраст: 39
tom.age = -3486  # Недопустимый возраст  (Обращение к сеттеру)
print(tom.age)  # 39 (Обращение к геттеру)
tom.age = 25  # (Обращение к сеттеру)
tom.print_person()  # Имя: Tom  Возраст: 25
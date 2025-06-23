class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age


def print_person(person):
    match person:
        case Person(name="Tom", age=37):
            print("Default Person")
        case Person(name=name, age=37):
            print(f"Name: {name}")
        case Person(name="Tom", age=age):
            print(f"Age: {age}")
        case Person(name=name, age=age):
            print(f"Name: {name}  Age: {age}")
# Python позволяет использовать в pattern matching в качестве шаблонов объекты классов.

print_person(Person("Tom", 37))  # Default person
print_person(Person("Tom", 22))  # Age: 22
print_person(Person("Sam", 37))  # Name: Sam
print_person(Person("Bob", 41))  # Name: Bob  Age: 41
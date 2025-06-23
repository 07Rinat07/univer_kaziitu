class Person:
    __match_args__ = ("name", "age")

    def __init__(self, name, age):
        self.name = name
        self.age = age


def print_person(person):
    match person:
        case Person("Tom", 37):
            print("Default Person")
        case Person(person_name, 37):
            print(f"Name: {person_name}")
        case Person("Tom", person_age):
            print(f"Age: {person_age}")
        case Person(person_name, person_age):
            print(f"Name: {person_name}  Age: {person_age}")


print_person(Person("Tom", 37))  # Default person
print_person(Person("Tom", 22))  # Age: 22
print_person(Person("Sam", 37))  # Name: Sam
print_person(Person("Bob", 41))  # Name: Bob  Age: 41
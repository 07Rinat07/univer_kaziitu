class Person:
    __match_args__ = ("name", "age")

    def __init__(self, name, age):
        self.name = name
        self.age = age


def print_family(family):
    match family:
        case (Person() as husband, Person() as wife):
            print(f"Husband. Name: {husband.name}  Age: {husband.age}")
            print(f"Wife. Name: {wife.name}  Age: {wife.age}")
        case _:
            print("Undefined")


print_family((Person("Tom", 37), Person("Alice", 33)))
# Husband. Name: Tom  Age: 37
# Wife. Name: Alice  Age: 33

print_family((Person("Sam", 28), Person("Kate", 25)))
# Husband. Name: Sam  Age: 28
# Wife. Name: Kate  Age: 25
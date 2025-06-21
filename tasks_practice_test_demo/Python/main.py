def print_person(name, age, company):
    print(f"Name:{name}, Age: {age}, Company: {company}")


tom = {"name": "Tom", "age": 38, "company": "Google"}
# выполняем распаковку словаря tom
print_person(**tom)  # Name:Tom, Age: 38, Company: Google
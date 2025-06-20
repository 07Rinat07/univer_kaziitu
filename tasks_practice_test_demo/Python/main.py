users = {"Tom", "Bob", "Alice"}
users2 = {"Sam", "Kate", "Bob"}

users3 = users.difference(users2)
print(users3)  # {"Tom", "Alice"}
print(users - users2)  # {"Tom", "Alice"}
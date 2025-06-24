from datetime import datetime

deadline = datetime.strptime("22/05/2017", "%d/%m/%Y")
print(deadline)  # 2017-05-22 00:00:00

deadline = datetime.strptime("22/05/2017 12:30", "%d/%m/%Y %H:%M")
print(deadline)  # 2017-05-22 12:30:00

deadline = datetime.strptime("05-22-2017 12:30", "%m-%d-%Y %H:%M")
print(deadline)  # 2017-05-22 12:30:00

# Работа с датами и временем
# Модуль datetime
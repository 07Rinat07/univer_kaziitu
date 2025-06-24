from datetime import timedelta

three_hours = timedelta(hours=3)
print(three_hours)  # 3:00:00
three_hours_thirty_minutes = timedelta(hours=3, minutes=30)  # 3:30:00

two_days = timedelta(2)  # 2 days, 0:00:00

two_days_three_hours_thirty_minutes = timedelta(days=2, hours=3, minutes=30)  # 2 days, 3:30:00


# Нередко при работе с датами возникает необходимость добавить к какой-либо дате определенный промежуток времени или,
# наоборот, вычесть некоторый период. И специально для таких операций в модуле datetime определен класс timedelta.
# Фактически этот класс определяет некоторый период времени.
# Для определения промежутка времени можно использовать конструктор timedelta:
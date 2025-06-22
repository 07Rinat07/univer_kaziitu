text = "Это был огромный, в два обхвата дуб, с обломанными ветвями и с обломанной корой"
# разделение по пробелам
splitted_text = text.split()
print(splitted_text)
print(splitted_text[6])  # дуб,

# разбиение по запятым
splitted_text = text.split(",")
print(splitted_text)
print(splitted_text[1])  # в два обхвата дуб

# разбиение по первым пяти пробелам
splitted_text = text.split(" ", 5)
print(splitted_text)
print(splitted_text[5])  # обхвата дуб, с обломанными ветвями и с обломанной корой
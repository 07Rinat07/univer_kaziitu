from zipfile import ZipFile

myzip = ZipFile("metanit.zip", "w")


# Создание и закрытие файла
# Для создания архивного файла в конструктор ZipFile передается режим "w" или "a":
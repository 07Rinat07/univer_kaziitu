from zipfile import ZipFile

with ZipFile("metanit.zip", "a") as myzip:
    # записываем в архив новый файл "hello5.txt"
    with myzip.open("hello5.txt", "w") as hello_file:
        encoded_str = bytes("Python...", "UTF-8")
        hello_file.write(encoded_str)
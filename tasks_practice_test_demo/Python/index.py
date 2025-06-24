from zipfile import ZipFile

with ZipFile("metanit.zip", "r") as myzip:
    myzip.extractall()
def look(words):
    match words:
        case {"red": "красный", "blue": "синий"}:  # если в словаре words слова red и blue
            print("Слова red и blue есть в словаре")
        case {"red": "красный"}:  # если в словаре words есть слово red
            print("Слово red есть в словаре, а слово blue отсутствует")
        case {"blue": "синий"}:  # если в словаре words есть слово blue
            print("Слово blue есть в словаре, а слово red отсутствует")
        case {}:
            print("Слова red и blue в словаре отсутствует")
        case _:
            print("Это не словарь")


look({"red": "красный", "blue": "синий", "green": "зеленый"})  # Слова red и blue есть в словаре
look({"red": "красный", "green": "зеленый"})  # Слово red есть в словаре, а слово blue отсутствует
look({"blue": "синий", "green": "зеленый"})  # Слово blue есть в словаре, а слово red отсутствует
look({"green": "зеленый"})  # Слова red и blue в словаре отсутствует
look("yelllow")  # Это не словарь
import secrets

# генерацию случайной строки байтов, содержащей nbytes количество байтов.
token = secrets.token_bytes()
print(token)

# Если значение не указано, используется разумное значение по умолчанию
token = secrets.token_bytes(10)
print(token)

# Создание 16-байтового токена в шестнадцатеричном формате
token = secrets.token_hex(16)
print(token)

# Создание URL-безопасного токена
url_token = secrets.token_urlsafe(16)
print(url_token)
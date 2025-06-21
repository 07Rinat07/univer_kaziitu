import secrets
import string


def generate_password(length=8):
    characters = string.ascii_letters + string.digits + string.punctuation
    while True:
        password = "".join(secrets.choice(characters) for _ in range(length))
        # Гарантируем наличие разных типов символов
        if (any(c.islower() for c in password)
                and any(c.isupper() for c in password)
                and any(c.isdigit() for c in password)
                and any(c in string.punctuation for c in password)):
            return password


print(generate_password())
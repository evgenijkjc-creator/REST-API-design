# Запрос на регистрацию пользователя

Метод: POST
URL: /api/v1/register

Пример запроса:
https://{domain}/api/v1/register

Content-Type: application/json

# Request Body

```json
{
  "firstName": "Иван",
  "lastName": "Иванов",
  "email": "ivan@example.com",
  "password": "Password123!",
  "confirmPassword": "Password123!",
  "country": "RU",
  "subscriptionToNews": false
}
```
# Описание параметров

| Параметр           | Тип     | Обязательный | Описание             |
|--------------------|---------|--------------|-----------------------
| firstName          | string  | Да           | Имя пользователя     |
| lastName           | string  | Да           | Фамилия пользователя |
| email              | string  | Да           | Электронная почта    |
| password           | string  | Да           | Пароль               |
| confirmPassword    | string  | Да           | Подтверждение пароля |
| country            | string  | Да           | Код страны           |
| subscriptionToNews | boolean | Нет          | Подписка на новости  |

# Правила валидации

1. firstName — непустая строка.
2. lastName — непустая строка.
3. email — корректный формат email.
4. email — должен быть уникальным.
5. password — минимум 8 символов.
6. confirmPassword — должен совпадать с password.
7. country — допустимый код страны из GET /api/v1/countries.
8. subscriptionToNews — true или false.
9. Если subscriptionToNews не передан, используется false.

# successful Response Body

HTTP Status: 201 Created

Response Body:

```json
{
  "id": "12345"
}
```

Описание:
Пользователь успешно зарегистрирован.
Сервер возвращает идентификатор нового пользователя.

# Обработка ошибок

# 400 Bad Request

Некорректный формат email.

```json
{
  "message": "Невалидный email: ivanexample.com"
}
```

# 400 Bad Request

Пароли не совпадают.

```json
{
  "message": "Пароль и подтверждение пароля не совпадают"
}
```

# 400 Bad Request

Не заполнено обязательное поле.

```json
{
  "message": "Поле firstName обязательно"
}
```

# 400 Bad Request

Некорректный код страны.

```json
{
  "message": "Указан недопустимый код страны"
}
```

# 409 Conflict

Пользователь с таким email уже существует.

```json
{
  "message": "Пользователь с таким email уже зарегистрирован"
}
```

# 500 Internal Server Error

Внутренняя ошибка сервера.

```json
{
  "message": "Внутренняя ошибка сервера"
}
```

# Логика работы API

1. Клиент заполняет форму регистрации.
2. Клиент отправляет POST-запрос на /api/v1/register.
3. Сервер проверяет обязательные поля.
4. Сервер проверяет формат email.
5. Сервер проверяет совпадение паролей.
6. Сервер проверяет допустимость кода страны.
7. Сервер проверяет уникальность email.
8. Если данные корректны, сервер создаёт пользователя.
9. Сервер возвращает HTTP 201 Created и ID пользователя.
10. При ошибке возвращается соответствующий HTTP-статус и сообщение.

# Требования безопасности

- Передача данных осуществляется по HTTPS.
- Пароль не возвращается в Response Body.
- Пароль должен храниться в виде защищённого хеша.
- Сервер должен проверять данные независимо от клиентской валидации.

Запрос на получение справочника стран

МЕТОД: GET
URL: api/v1/countries

Пример запроса на сервер:
https: //{домен}/api/v1/countries

Response Body (code and status):
200 OK

{
    data: [
        {
        "code": "RU",
        "country": "Россия"
        },
        {
        "code": "BY",
        "country": "Беларусь"
        }
    ]
}
Ошибки:
400
401
403
500
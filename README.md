<h1>Дипломный проект - Сервис Мой Силант </h1>

<h2>Запуск проекта</h2>

Примеры команд даны для Windows-системы.

1. Перейдите в терминале в директорию проекта. 
2. Клонируйте проект.
```bash
git clone https://github.com/Den106/MySilant
```
3. Перейдите в папку backend и создайте и активируйте виртуальную среду.
```bash
cd backend
py -m venv venv
venv\scripts\activate
```
4. Установите требуемые библиотеки.
```bash
pip install -r requirements.txt
```
5. Создайте секретный ключ и вставьте его в файл backend\App\App\\.env в переменную SECRET_KEY
```bash
python -c 'from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())'
```
6. Перейдтие в директорию App
```bash
cd App
```
7. Запустите сервер.
```bash
py manage.py runserver
```
8. Откройте второе окно терминала
9. Перейдите в директорию frontend
```bash
cd frontend
```
10. Установите требуемые зависимости
```bash
npm install
```
11. Запустите локальный web-сервер
```bash
npm start
```

<h2>Расположение API-документации</h2>

Вся документация расположена по адресам:

http://127.0.0.1:8000/redoc

http://127.0.0.1:8000/swagger

http://127.0.0.1:8000/swagger.json

<h2>Возможности приложения</h2>

Главная страница приложения расположена по адресу:

http://localhost:3000/

<h2>Логины</h2>

Логины и пароли для авторизации записаны в фалйле login.txt

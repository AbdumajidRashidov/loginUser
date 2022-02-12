
API ning asosiy URLi: `http://92.63.206.40:1122/api`

## API manzillari

1. [Log in :](#Log-in) `http://92.63.206.40:1122/api/login`
2. [Sign in :](#Sign-In) `http://92.63.206.40:1122/api/signin`
3. [User data : ](#User-data) `http://92.63.206.40:1122/api/user`
4. [Faculty list :](#Faculty-list) `http://92.63.206.40:1122/api/faculty`
5. [Change password : ](#Change-password)`http://92.63.206.40:1122/api/change_password`
6. [Change phone : ](#Change-phone)`http://92.63.206.40:1122/api/change_phone`
7. [Change email : ](#Change-email)`http://92.63.206.40:1122/api/change_email`

## Frontend qism uchun

1. [Log in page:](#Login-front) `http://92.63.206.40:1122/api/login`
2. [Sign in page:](#Signin-front) `http://92.63.206.40:1122/api/login`
3. [Profile page:](#Profile-front) `http://92.63.206.40:1122/api/login`

## Log in

Request Method - `POST`

Payload:

1. `login`
2. `password`

Response:

```json
{
  "msg": "ok",
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzb21lIjoicGF5bG9hZCJ9.Joh1R2dYzkRvDkqv3sygm5YyK8Gi4ShZqbhK2gxcs2U"
}
```

## Sign In

Request Method - `POST`

Payload:

1. `login`
2. `password`
3. `surname`
4. `name`
5. `faculty_id`
6. `phone`
7. `email`

Response:

```json
{
  "msg": "ok"
}
```

## User data

Request Method - `GET`

Requst Header:

`x-access-token` : `token`

Login qilgan vaqtda oladigon tokenni request headerga qo'yib jonatiladi

Response:

```json
{
  "msg": "ok",
  "surname": "Surname",
  "name": "Name",
  "faculty_id": 123,
  "id": 15,
  "std_code": 123456,
  "phone": "+998901234567"
}
```

## Faculty-list

Request Method - `GET`

Response:

```json
{
  "1": "Faculty1",
  "2": "Faculty2",
  "3": "Faculty3",
 ...
}
```

# Change password

Request Method - `POST`

Requst Header:

`x-access-token` : `token`

Payload:

1. `old_password`
2. `new_password`
3. `repeat_password`
   `

Response:

```json
{
  "msg": "ok"
}
```

# Change phone

Request Method - `POST`

Requst Header:

`x-access-token` : `token`

Payload:

1. `phone`

Response:

```json
{
  "msg": "ok"
}
```

# Change email

Request Method - `POST`

Requst Header:

`x-access-token` : `token`

Payload:

1. `email`

Response:

```json
{
  "msg": "ok"
}
```

# React.js

React.jsda tayyorlangan starter kodni yuklab olib davom ettiring!

O'rnatib olish - `npm install`

Ishga tushirish - `npm start`

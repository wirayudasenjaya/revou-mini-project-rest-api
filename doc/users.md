# Users API Spec

## Register

### Endpoint: POST /users/register

Request Body :
```json
{ 
	"name": "Doni",
    "email": "doni@gmail.com",
    "password": "123456",
}
```

Response Body (Success) :
```json
{ 
	"data": {
		"user_id": 10,
	}
}
```

Response Body (Error) :

```json
{ 
	"error": "some error message", 
}
```

## Login

### Endpoint: POST /users/login

Request Body :
```json
{ 
    "email": "doni@gmail.com",
    "password": "123456",
}
```

Response Body (Success) :
```json
{ 
	"data": {
		"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
	}
}
```

Response Body (Error) :

```json
{ 
	"error": "some error message", 
}
```
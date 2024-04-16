# Showtime API Spec

## Add Showtime (Admin)

### Endpoint: POST /showtime

Request Header:

```
Authorization: Bearer <jwt_token>
```

Request Body :

```json
{ 
	"movie_id": 10,
    "showtime": "15:00",
}
```

Response Body (Success) :
```json
{ 
	"data": {
		"id": 1,
	}
}
```

Response Body (Error) :

```json
{ 
	"error": "some error message", 
}
```

## Delete Showtime (Admin)

### Endpoint: DELETE /showtime/:showtime_id

Request Header:

```
Authorization: Bearer <jwt_token>
```

Response Body (Success) :
```json
{ 
	"message": "deleted",
	"id": 1
}
```

Response Body (Error) :

```json
{ 
	"error": "some error message", 
}
```
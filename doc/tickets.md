# Movies API Spec

## Create Ticket

### Endpoint: POST /ticket

Request Header:

```
Authorization: Bearer <jwt_token>
```

Request Body :

```json
{ 
	"movie_id": 10,
    "user_id": 1,
    "showtime_id": 1,
    "seat": 2
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

## Check Booking History

### Endpoint: GET /bookings

Request Header:

```
Authorization: Bearer <jwt_token>
```

Response Body (Success) :
```json
{ 
	"data": [
        {
            "id": 1,
            "ticket_id": 1,
            "movie_id": 1,
            "showtime_id": 1,
            "status": "Pending"
        }
    ]
}

Response Body (Error) :

```json
{ 
	"error": "some error message", 
}
```
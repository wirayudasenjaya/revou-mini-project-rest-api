# Booking API Spec

## Get Booking History

### Endpoint: GET /booking

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
            "movie_id": 11,
            "title": "The Midnight Sky",
            "user_id": 1,
            "showtime_id": 1,
            "seat": 2
        },
        {
            "id": 2,
            "movie_id": 12,
            "title": "Squid Game",
            "user_id": 1,
            "showtime_id": 3,
            "seat": 2
        }
    ]
}
```

Response Body (Error) :

```json
{ 
	"error": "some error message", 
}
```

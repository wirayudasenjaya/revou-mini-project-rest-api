# Movies API Spec

## Get Movies

### Endpoint: GET /movies

Response Body (Success) :

```json
{ 
	"data": [
		{
            "id": 1,
            "title": "Dune",
            "genre": "Adventure, Drama, Sci-Fi",
            "duration": 120,
            "showtime": "12:00:00,15:00:00"
        },
        {
            "id": 2,
            "title": "The Godfather",
            "genre": "Crime, Drama",
            "duration": 150,
            "showtime": "12:00:00,15:00:00"
        },
	]
}
```

Response Body (Error) :

```json
{ 
	"error": "some error message", 
}
```

## Get Movie Details

### Endpoint: GET /movies/:id

Response Body (Success) :

```json
{ 
	"data": {
		"id": 1,
		"title": "Dune",
		"genre": "Adventure, Drama, Sci-Fi",
		"duration": 150,
		"showtime": "12:00:00,15:00:00",
		"synopsis": "In the distant future, Paul Atreides, a young nobleman, must travel to a dangerous desert planet called Arrakis...",
		"cast": [
			"Timothée Chalamet"
		],
		"director": "Denis Villeneuve",
		"rating": 7.5
	}
}
```

Response Body (Error) :

```json
{ 
	"error": "some error message", 
}
```

## Add Movies (Admin)

### Endpoint: POST /movies

Request Header:

```
Authorization: Bearer <jwt_token>
```

Request Body :

```json
{
	"title": "The Journey of Discovery",
    "genre": "Adventure/Drama",
    "duration": 120,
    "synopsis": "Follow the epic journey of a group of explorers as they venture into uncharted territories, facing danger and discovering the true meaning of courage and friendship.",
	"cast": "John Smith, Emily Johnson, Michael Lee, Sarah Thompson",
	"director": "Jennifer Rodriguez",
	"rating": 8.5
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

## Update Movies (Admin)

### Endpoint: PATCH /movies/:movie_id

Request Header:

```
Authorization: Bearer <jwt_token>
```

Request Body :

```json
{
	"title": "The Journey of Discovery",
    "genre": "Adventure",
    "duration": 120,
    "synopsis": "Follow the epic journey of a group of explorers as they venture into uncharted territories, facing danger and discovering the true meaning of courage and friendship.",
	"cast": "John Smith",
	"director": "Jennifer Rodriguez",
	"rating": 9
}
```

Response Body (Success) :
```json
{ 
	message: "updated"
}
```

Response Body (Error) :

```json
{ 
	"error": "some error message", 
}
```

## Delete Movies (Admin)

### Endpoint: DELETE /movies/:movie_id

Request Header:

```
Authorization: Bearer <jwt_token>
```

Response Body (Success) :
```json
{ 
	message: "deleted"
}
```

Response Body (Error) :

```json
{ 
	"error": "some error message", 
}
```
export const ticketQueries = {
	create: "INSERT INTO ticket (movie_id, user_id, showtime_id, seat) values (?, ?, ?, ?)"
}
export const bookingQueries = {
	getAll: "SELECT ticket.*, movies.title, showtime.showtime FROM ticket JOIN movies ON ticket.movie_id = movies.id JOIN showtime ON ticket.showtime_id = showtime.id WHERE user_id = ?"
}
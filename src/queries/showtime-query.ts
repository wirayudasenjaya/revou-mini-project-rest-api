export const showtimeQueries = {
	add: "INSERT INTO showtime(movie_id, showtime) values(?, ?)",
	delete: "DELETE FROM showtime WHERE id = ?"
}
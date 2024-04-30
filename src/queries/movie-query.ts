export const movieQueries = {
    getAllMovie: "SELECT a.*, GROUP_CONCAT(b.showtime) AS showtimes FROM movies a JOIN showtime b WHERE a.id = b.movie_id GROUP BY a.id",
    getMovieDetail: "SELECT a.*, GROUP_CONCAT(b.showtime) AS showtimes FROM movies a JOIN showtime b ON a.id = b.movie_id WHERE a.id = ? GROUP BY a.id",
    addMovie: "INSERT INTO movies(title, genre, duration, synopsis, cast, director, rating) values (?, ?, ?, ?, ?, ?, ?)",
    updateMovie: "UPDATE movies SET ? WHERE id = ?",
    deleteMovie: "DELETE FROM movies WHERE id = ?"
}
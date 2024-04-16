import mysql2 from "mysql2";

import { MovieModel } from "../models/movie-model";

export class MovieRepository {
  private db: mysql2.Connection;

  constructor(db: mysql2.Connection) {
    this.db = db;
  }

  getAllMovies(): Promise<MovieModel[]> {
    return new Promise<MovieModel[]>((resolve, reject) => {
      const q = "SELECT a.*, GROUP_CONCAT(b.showtime) AS showtimes FROM movies a JOIN showtime b WHERE a.id = b.movie_id GROUP BY a.id";
      this.db.query(q, (err, rows: mysql2.RowDataPacket[]) => {
        if (err) {
          reject(err);
          return;
        }

        let movies: MovieModel[] = [];

        for (let i = 0; i < rows.length; i++) {
          movies.push({
            id: rows[i].id,
            title: rows[i].title,
            genre: rows[i].genre,
            duration: rows[i].duration,
            showtime: rows[i].showtimes,
            synopsis: rows[i].synopsis,
            cast: rows[i].cast,
            director: rows[i].director,
            rating: rows[i].rating,
          });
        }

        resolve(movies);
      });
    });
  }

  getMovieDetail(movie_id: number): Promise<MovieModel> {
    return new Promise<MovieModel>((resolve, reject) => {
      const q = `SELECT a.*, GROUP_CONCAT(b.showtime) AS showtimes FROM movies a JOIN showtime b ON a.id = b.movie_id WHERE a.id = '${movie_id}' GROUP BY a.id`;
      this.db.query(q, (err, rows: mysql2.RowDataPacket[]) => {
        if (err) {
          reject(err);
          return;
        }

        if (rows.length == 0) {
          reject("data not found");
          return;
        }

        resolve({
          id: rows[0].id,
          title: rows[0].title,
          genre: rows[0].genre,
          duration: rows[0].duration,
          showtime: rows[0].showtimes,
          synopsis: rows[0].synopsis,
          cast: rows[0].cast,
          director: rows[0].director,
          rating: rows[0].rating,
        });
      });
    });
  }

  addMovie(movieModel: MovieModel): Promise<number> {
    return new Promise<number>((resolve, reject) => {
      const q = `INSERT INTO movies(title, genre, duration, synopsis, cast, director, rating) values ('${movieModel.title}', '${movieModel.genre}', ${movieModel.duration}, '${movieModel.synopsis}', '${movieModel.cast}', '${movieModel.director}', '${movieModel.rating}')`;
      this.db.query(q, (err, rows: mysql2.ResultSetHeader) => {
        if (err) {
          reject(err);
          return;
        }

        resolve(rows.insertId);
      });
    });
  }

  updateMovie(movieModel: MovieModel, id: number): Promise<number> {
    return new Promise<number>((resolve, reject) => {
      const conditions = [
        `title = '${movieModel.title}'`,
        `genre = '${movieModel.genre}'`,
        `duration = ${movieModel.duration}`,
        `synopsis = '${movieModel.synopsis}'`,
        `cast = '${movieModel.cast}'`,
        `director = '${movieModel.director}'`,
        `rating = '${movieModel.rating}'`
      ]

      const addSQL = `${conditions.join(', ')}`

      const q = `UPDATE movies SET ${addSQL} WHERE id = ${id}`;
      this.db.query(q, (err, rows: mysql2.ResultSetHeader) => {
        if (err) {
          reject(err);
          return;
        }

        resolve(rows.affectedRows);
      });
    })
  }

  deleteMovie(id: number) {
    return new Promise((resolve, reject) => {
      const q = `DELETE FROM movies WHERE id = ${id}`;
      this.db.query(q, (err, rows: mysql2.ResultSetHeader) => {
        if (err) {
          reject(err);
          return;
        }

        resolve(rows.affectedRows);
      });
    })
  }
}

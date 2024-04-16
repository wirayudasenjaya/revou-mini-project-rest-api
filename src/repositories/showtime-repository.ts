import mysql2 from "mysql2";
import { ShowtimeModel } from "../models/showtime-model";

export class ShowtimeRepository {
  private db: mysql2.Connection;

  constructor(db: mysql2.Connection) {
    this.db = db;
  }

  addShowtime(showtimeModel: ShowtimeModel): Promise<number> {
    return new Promise<number>((resolve, reject) => {
      const q = `INSERT INTO showtime(movie_id, showtime) values(${showtimeModel.movie_id}, '${showtimeModel.showtime}')`;
      this.db.query(q, (err, rows: mysql2.ResultSetHeader) => {
        if (err) {
          reject(err);
          return;
        }

        resolve(rows.insertId);
      });
    });
  }

  deleteShowtime(id: number) {
    return new Promise((resolve, reject) => {
      const q = `DELETE FROM showtime WHERE id = ${id}`;
      this.db.query(q, (err, rows: mysql2.ResultSetHeader) => {
        if (err) {
          reject(err);
          return;
        }

        resolve(rows.affectedRows);
      });
    });
  }
}

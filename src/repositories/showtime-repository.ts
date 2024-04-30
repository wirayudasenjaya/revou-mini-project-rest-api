import mysql2 from "mysql2";
import { ShowtimeModel } from "../models/showtime-model";
import { showtimeQueries } from "../queries/showtime-query";

export class ShowtimeRepository {
  private db: mysql2.Connection;

  constructor(db: mysql2.Connection) {
    this.db = db;
  }

  addShowtime(showtimeModel: ShowtimeModel): Promise<number> {
    return new Promise<number>((resolve, reject) => {
      this.db.query(
        showtimeQueries.add,
        [showtimeModel.movie_id, showtimeModel.showtime],
        (err, rows: mysql2.ResultSetHeader) => {
          if (err) {
            reject(err);
            return;
          }

          resolve(rows.insertId);
        }
      );
    });
  }

  deleteShowtime(id: number) {
    return new Promise((resolve, reject) => {
      this.db.query(
        showtimeQueries.delete,
        [id],
        (err, rows: mysql2.ResultSetHeader) => {
          if (err) {
            reject(err);
            return;
          }

          resolve(rows.affectedRows);
        }
      );
    });
  }
}

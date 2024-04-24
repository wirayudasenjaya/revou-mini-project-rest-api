import mysql2 from "mysql2";
import { BookingModel } from "../models/booking-model";

export class BookingRepository {
  private db: mysql2.Connection;

  constructor(db: mysql2.Connection) {
    this.db = db;
  }

  getAll(user_id: number): Promise<BookingModel[]> {
    return new Promise<BookingModel[]>((resolve, reject) => {
      const q = `SELECT ticket.*, movies.title, showtime.showtime FROM ticket JOIN movies ON ticket.movie_id = movies.id JOIN showtime ON ticket.showtime_id = showtime.id WHERE user_id = '${user_id}'`;
      this.db.query(q, (err, rows: mysql2.RowDataPacket[]) => {
        if (err) {
          reject(err);
          return;
        }

        let booking: BookingModel[] = [];

        for (let i = 0; i < rows.length; i++) {
          booking.push({
            id: rows[i].id,
            movie_id: rows[i].movie_id,
            title: rows[i].title,
            user_id: rows[i].user_id,
            showtime_id: rows[i].showtime_id,
            showtime: rows[i].showtime,
            seat: rows[i].seat,
            status: rows[i].status
          });
        }

        resolve(booking);
      });
    });
  }
}

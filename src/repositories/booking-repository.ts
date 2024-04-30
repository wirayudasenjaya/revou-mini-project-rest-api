import mysql2 from "mysql2";
import { BookingModel } from "../models/booking-model";
import { bookingQueries } from "../queries/booking-query";

export class BookingRepository {
  private db: mysql2.Connection;

  constructor(db: mysql2.Connection) {
    this.db = db;
  }

  getAll(user_id: number): Promise<BookingModel[]> {
    return new Promise<BookingModel[]>((resolve, reject) => {
      this.db.query(
        bookingQueries.getAll,
        [user_id],
        (err, rows: mysql2.RowDataPacket[]) => {
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
              status: rows[i].status,
            });
          }

          resolve(booking);
        }
      );
    });
  }
}

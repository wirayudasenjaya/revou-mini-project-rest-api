import mysql2 from "mysql2";

import { TicketModel } from "../models/ticket-model";

export class TicketRepository {
  private db: mysql2.Connection;

  constructor(db: mysql2.Connection) {
    this.db = db;
  }

  create(ticketModel: TicketModel): Promise<number> {
    return new Promise<number>((resolve, reject) => {
      const q = `INSERT INTO ticket (movie_id, user_id, showtime_id, seat) values (${ticketModel.movie_id}, ${ticketModel.user_id}, ${ticketModel.showtime_id}, ${ticketModel.seat})`;
      this.db.query(q, (err, rows: mysql2.ResultSetHeader) => {
        if (err) {
          reject(err);
          return;
        }

        resolve(rows.insertId);
      });
    });
  }
}

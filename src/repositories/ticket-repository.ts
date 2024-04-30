import mysql2 from "mysql2";

import { TicketModel } from "../models/ticket-model";
import { ticketQueries } from "../queries/ticket-query";

export class TicketRepository {
  private db: mysql2.Connection;

  constructor(db: mysql2.Connection) {
    this.db = db;
  }

  create(ticketModel: TicketModel): Promise<number> {
    return new Promise<number>((resolve, reject) => {
      this.db.query(
        ticketQueries.create,
        [
          ticketModel.movie_id,
          ticketModel.user_id,
          ticketModel.showtime_id,
          ticketModel.seat,
        ],
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
}

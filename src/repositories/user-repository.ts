import mysql2 from "mysql2";
import { UserModel } from "../models/user-model";

export class UserRepository {
  private db: mysql2.Connection;

  constructor(db: mysql2.Connection) {
    this.db = db;
  }

  create(userModel: UserModel) {
    return new Promise<number>((resolve, reject) => {
      const q = `INSERT INTO users(email, password, name, role) values('${userModel.email}', '${userModel.password}', '${userModel.name}', 'User')`;
      this.db.query(q, (err, rows: mysql2.ResultSetHeader) => {
        if (err) {
          reject(err);
          return;
        }

        resolve(rows.insertId);
      });
    });
  }

  getByEmail(email: string) {
    return new Promise<UserModel>((resolve, reject) => {
      const q = `SELECT * FROM users WHERE email = '${email}'`;
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
          email: rows[0].email,
          password: rows[0].password,
          name: rows[0].name,
          role: rows[0].role
        });
      });
    });
  }
}

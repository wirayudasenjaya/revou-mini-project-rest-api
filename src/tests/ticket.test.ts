import request from "supertest";
import mysql2 from 'mysql2';

import app from "../app";
import { mysqlConnection } from "../lib/database";

let authToken = "";
let connection: mysql2.Connection;

beforeAll(async () => {
  connection = await mysqlConnection();
});

afterAll(() => {
  connection.end()
});

describe("Ticket API", () => {
	it("Should get token from login", async () => {
    const res = await request(app)
      .post("/users/login")
      .send({
        email: "doni@gmail.com",
        password: "123456",
      })
    expect(res.status).toBe(200);
    authToken = res.body.data.token;
    expect(authToken).toBe(res.body.data.token);
  });

  it("Should create ticket", async () => {
    const res = await request(app)
      .post("/ticket")
			.set("Authorization", `Bearer ${authToken}`)
      .send({
        movie_id: 12,
        user_id: 1,
				showtime_id: 3,
				seat: 1
       })
    expect(res.status).toBe(200);
  });

  it("Should handle create ticket error", async () => {
    const res = await request(app)
      .post("/ticket")
			.set("Authorization", `Bearer ${authToken}`)
      .send({
        movie_id: 0,
        user_id: 0,
				showtime_id: 0,
				seat: 0
       })
    expect(res.status).toBe(500);
  });

  it("Should return unauthorized", async () => {
    const res = await request(app)
      .post("/ticket")
      .send({
        movie_id: 11,
        user_id: 1,
				showtime_id: 1,
				seat: 2
       })
    expect(res.status).toBe(401);
  });
});
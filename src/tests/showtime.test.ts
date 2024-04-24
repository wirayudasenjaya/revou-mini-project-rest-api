import request from "supertest";
import mysql2 from "mysql2";

import app from "../app";
import { mysqlConnection } from "../lib/database";

let authToken = "";
let connection: mysql2.Connection;
let createdShowtimeId = 0;

beforeAll(async () => {
  connection = await mysqlConnection();
});

afterAll(() => {
  connection.end();
});

describe("Showtime API", () => {
  it("Should get token from login", async () => {
    const res = await request(app).post("/users/login").send({
      email: "doni@gmail.com",
      password: "123456",
    });
    expect(res.status).toBe(200);
    authToken = res.body.data.token;
    expect(authToken).toBe(res.body.data.token);
  });

  it("Should add showtime to existing movies", async () => {
    const res = await request(app)
      .post("/showtime")
      .set("Authorization", `Bearer ${authToken}`)
      .send({
        movie_id: 11,
        showtime: "07:00",
      });
    expect(res.status).toBe(200);
    createdShowtimeId = res.body.data.id;
    expect(createdShowtimeId).toBe(res.body.data.id);
  });

  it("Should handle add showtime error", async () => {
    const res = await request(app)
      .post("/showtime")
      .set("Authorization", `Bearer ${authToken}`)
      .send({
        movie_id: 9,
        showtime: "07:00",
      });
    expect(res.status).toBe(500);
  });

  it("Should delete showtime", async () => {
    const res = await request(app)
      .delete(`/showtime/${createdShowtimeId}`)
      .set("Authorization", `Bearer ${authToken}`);
    expect(res.status).toBe(200);
  });

  it("Should return unauthorized", async () => {
    const res = await request(app).post("/showtime").send({
      movie_id: 9,
      showtime: "07:00",
    });
    expect(res.status).toBe(401);
  });
});

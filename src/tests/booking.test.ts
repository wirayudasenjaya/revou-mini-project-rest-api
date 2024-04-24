import request from "supertest";
import mysql2 from "mysql2";

import app from "../app";
import { mysqlConnection } from "../lib/database";

let authToken = "";
let connection: mysql2.Connection;

beforeAll(async () => {
  connection = await mysqlConnection();
});

afterAll(() => {
  connection.end();
});

describe("Booking API", () => {
  it("Should get token from login", async () => {
    const res = await request(app).post("/users/login").send({
      email: "doni@gmail.com",
      password: "123456",
    });
    expect(res.status).toBe(200);
    authToken = res.body.data.token;
    expect(authToken).toBe(res.body.data.token);
  });

  it("Should get user bookings", async () => {
    const res = await request(app)
      .get("/booking")
      .set("Authorization", `Bearer ${authToken}`);
    expect(res.status).toBe(200);
  });

  it("Should return unauthorized", async () => {
    const res = await request(app).get("/booking");
    expect(res.status).toBe(401);
  });
});

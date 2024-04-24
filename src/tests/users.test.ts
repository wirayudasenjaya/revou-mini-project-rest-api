import request from "supertest";
import mysql2 from 'mysql2';

import app from "../app";
import { mysqlConnection } from "../lib/database";

let connection: mysql2.Connection;

beforeAll(async () => {
  connection = await mysqlConnection();
});

afterAll(() => {
  connection.end();
});

describe("Users API", () => {
  it("Should register new user", async () => {
    const res = await request(app).post("/users/register").send({
      email: "toni@gmail.com",
      password: "123456",
      name: "toni"
    })
    expect(res.status).toBe(200);
  });

  it("Handle register user error", async () => {
    const res = await request(app).post("/users/register").send({
      email: "toni@gmail.com",
      password: "123456",
      name: "toni"
    })
    expect(res.status).toBe(500);
  });

  it("Should login existing user", async () => {
    const res = await request(app)
      .post("/users/login")
      .send({
        email: "doni@gmail.com",
        password: "123456",
      })
    expect(res.status).toBe(200);
  });

  it("Handle login user error", async () => {
    const res = await request(app)
      .post("/users/login")
      .send({
        email: "doni@gmail.com",
        password: "1234567",
      })
      expect(res.status).toBe(500);
  });
});

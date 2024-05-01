import request from "supertest";
import mysql2 from 'mysql2';

import app from "../app";
import { mysqlConnection } from "../lib/database";

let authToken = "";
let connection: mysql2.Connection;
let createdMovieId = 0;

beforeAll(async () => {
  connection = await mysqlConnection();
});

afterAll(() => {
  connection.end()
});

describe("Movies API", () => {
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

  it("Should get all movies", async () => {
    const res = await request(app)
      .get("/movies")
			.set("Authorization", `Bearer ${authToken}`);
    expect(res.status).toBe(200);
  });

	it("Should get one of the movies detail", async () => {
    const res = await request(app)
      .get("/movies/11")
			.set("Authorization", `Bearer ${authToken}`);
    expect(res.status).toBe(200);
		expect(res.body.data.title).toBe('The Midnight Sky');
  });

  it("Should add new movie", async () => {
    const res = await request(app)
      .post("/movies/add")
      .send({
        title: "testing title",
        genre: "testing genre",
        duration: 111,
        synopsis: "testing synopsis",
        cast: "testing cast",
        director: "testing director",
        rating: "1.1"
      })
			.set("Authorization", `Bearer ${authToken}`);
    expect(res.status).toBe(200);
		createdMovieId = res.body.data.id;
    expect(createdMovieId).toBe(res.body.data.id);
  });

  it("Should update a movie", async () => {
    const res = await request(app)
      .patch(`/movies/${createdMovieId}`)
      .send({
        title: "testing edit title",
        genre: "testing edit genre",
        duration: 112,
        synopsis: "testing edit synopsis",
        cast: "testing edit cast",
        director: "testing edit director",
        rating: "1.2"
      })
			.set("Authorization", `Bearer ${authToken}`);
    expect(res.status).toBe(200);
  });

  it("Should delete a movie", async () => {
    const res = await request(app)
      .delete(`/movies/${createdMovieId}`)
			.set("Authorization", `Bearer ${authToken}`);
    expect(res.status).toBe(200);
  });
});

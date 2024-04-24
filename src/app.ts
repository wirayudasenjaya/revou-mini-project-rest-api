import express from "express";
import "dotenv/config";

import {
  adminAuthenticationMiddleware,
  authenticationMiddleware,
} from "./middlewares/middleware";
import { initializeControllers } from "./controllers";

const app = express();

async function initializeApp() {
  try {
    const {
      userController,
      movieController,
      ticketController,
      bookingController,
      showtimeController
  } = await initializeControllers();

    app.use(express.json());

    const userRouter = express.Router();
    userRouter.post("/users/register", userController.register);
    userRouter.post("/users/login", userController.login);

    const movieRouter = express.Router();
    movieRouter.get("/movies", movieController.getAllMovies);
    movieRouter.get("/movies/:movie_id", movieController.getMovieDetail);

    const privateMovieRouter = express.Router();
    privateMovieRouter.use(adminAuthenticationMiddleware);
    privateMovieRouter.post("/movies/add", movieController.addMovie);
    privateMovieRouter.patch("/movies/:movie_id", movieController.updateMovie);
    privateMovieRouter.delete("/movies/:movie_id", movieController.deleteMovie);

    const ticketRouter = express.Router();
    ticketRouter.use(authenticationMiddleware);
    ticketRouter.post("/ticket", ticketController.createTicket);

    const bookingRouter = express.Router();
    bookingRouter.use(authenticationMiddleware);
    bookingRouter.get("/booking", bookingController.getAllBookings);

    const showtimeRouter = express.Router();
    showtimeRouter.use(adminAuthenticationMiddleware);
    showtimeRouter.post("/showtime", showtimeController.addShowtime);
    showtimeRouter.delete(
      "/showtime/:showtime_id",
      showtimeController.deleteShowtime
    );

    app.use(userRouter);
    app.use(movieRouter);
    app.use(privateMovieRouter);
    app.use(ticketRouter);
    app.use(bookingRouter);
    app.use(showtimeRouter);
  } catch (e) {
    console.error("Failed to initialize app:", e);
    process.exit(1);
  }
}

initializeApp();

export default app;

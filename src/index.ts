import express from "express";
import "dotenv/config";

import { mysqlConnection } from "./lib/database";
import { UserRepository } from "./repositories/user-repository";
import { UserService } from "./services/user-service";
import { UserController } from "./controllers/user-controller";
import { MovieRepository } from "./repositories/movie-repository";
import { MovieService } from "./services/movie-service";
import { MovieController } from "./controllers/movie-controller";
import { TicketRepository } from "./repositories/ticket-repository";
import { TicketService } from "./services/ticket-service";
import { TicketController } from "./controllers/ticket-controller";
import { adminAuthenticationMiddleware, authenticationMiddleware } from "./middlewares/middleware";
import { BookingRepository } from "./repositories/booking-repository";
import { BookingService } from "./services/booking-service";
import { BookingController } from "./controllers/booking-controller";
import { ShowtimeRepository } from "./repositories/showtime-repository";
import { ShowtimeService } from "./services/showtime-service";
import { ShowtimeController } from "./controllers/showtime-controller";

async function startServer() {
  try {
    const db = await mysqlConnection();

    const userRepository = new UserRepository(db);
		const userService = new UserService(userRepository);
		const userController = new UserController(userService);

    const movieRepository = new MovieRepository(db);
		const movieService = new MovieService(movieRepository);
		const movieController = new MovieController(movieService);

    const ticketRepository = new TicketRepository(db);
		const ticketService = new TicketService(ticketRepository);
		const ticketController = new TicketController(ticketService);

    const bookingRepository = new BookingRepository(db);
		const bookingService = new BookingService(bookingRepository);
		const bookingController = new BookingController(bookingService);

    const showtimeRepository = new ShowtimeRepository(db);
		const showtimeService = new ShowtimeService(showtimeRepository);
		const showtimeController = new ShowtimeController(showtimeService);

    const app = express();
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
    showtimeRouter.delete("/showtime/:showtime_id", showtimeController.deleteShowtime);

    app.use(userRouter);
    app.use(movieRouter);
    app.use(privateMovieRouter);
    app.use(ticketRouter);
    app.use(bookingRouter);
    app.use(showtimeRouter);

    app.listen(8082, () => {
      console.log("Server running at port 8082");
    });
  } catch (e) {
    console.error("Failed to start server");
    process.exit(1);
  }
}

startServer();

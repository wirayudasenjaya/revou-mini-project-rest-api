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

import { BookingRepository } from "./repositories/booking-repository";
import { BookingService } from "./services/booking-service";
import { BookingController } from "./controllers/booking-controller";

import { ShowtimeRepository } from "./repositories/showtime-repository";
import { ShowtimeService } from "./services/showtime-service";
import { ShowtimeController } from "./controllers/showtime-controller";

export async function initializeControllers() {
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

  return {
    userController,
    movieController,
    ticketController,
    bookingController,
    showtimeController,
  };
}

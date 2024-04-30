import express from "express";
import "dotenv/config";

import { initializeControllers } from "./controllers";
import { userRoutes } from "./routes/user-routes";
import { movieRoutes } from "./routes/movie-routes";
import { ticketRoutes } from "./routes/ticket-routes";
import { bookingRoutes } from "./routes/booking-routes";
import { showtimeRoutes } from "./routes/showtime-routes";

const app = express();

async function initializeApp() {
  try {
    const {
      userController,
      movieController,
      ticketController,
      bookingController,
      showtimeController,
    } = await initializeControllers();

    app.use(express.json());

    app.use(userRoutes(userController));
    app.use(movieRoutes(movieController));
    app.use(ticketRoutes(ticketController));
    app.use(bookingRoutes(bookingController));
    app.use(showtimeRoutes(showtimeController));
  } catch (e) {
    console.error("Failed to initialize app:", e);
    process.exit(1);
  }
}

initializeApp();

export default app;

import express from "express";

import { authenticationMiddleware } from "../middlewares/middleware";
import { BookingController } from "../controllers/booking-controller";

export const bookingRoutes = (bookingController: BookingController) => {
  const bookingRouter = express.Router();
  bookingRouter.use(authenticationMiddleware);
  bookingRouter.get("/booking", bookingController.getAllBookings);

  return bookingRouter;
};

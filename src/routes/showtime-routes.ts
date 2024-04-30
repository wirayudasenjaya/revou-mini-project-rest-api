import express from "express";

import { adminAuthenticationMiddleware } from "../middlewares/middleware";
import { ShowtimeController } from "../controllers/showtime-controller";

export const showtimeRoutes = (showtimeController: ShowtimeController) => {
  const showtimeRouter = express.Router();
  showtimeRouter.use(adminAuthenticationMiddleware);
  showtimeRouter.post("/showtime", showtimeController.addShowtime);
  showtimeRouter.delete(
    "/showtime/:showtime_id",
    showtimeController.deleteShowtime
  );

  return showtimeRouter;
};

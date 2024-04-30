import express from "express";

import { authenticationMiddleware } from "../middlewares/middleware";
import { TicketController } from "../controllers/ticket-controller";

export const ticketRoutes = (ticketController: TicketController) => {
  const ticketRouter = express.Router();
  ticketRouter.use(authenticationMiddleware);
  ticketRouter.post("/ticket", ticketController.createTicket);

  return ticketRouter;
};

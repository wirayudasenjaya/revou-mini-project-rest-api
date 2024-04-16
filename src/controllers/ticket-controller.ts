import express from "express";

import { TicketService } from "../services/ticket-service";
import { CreateTicketRequest } from "../models/ticket-model";

export class TicketController {
  private ticketService: TicketService;

  constructor(ticketService: TicketService) {
    this.ticketService = ticketService;
  }

  createTicket = async (req: express.Request, res: express.Response) => {
    try {
      const createTicketRequest = req.body as CreateTicketRequest;

      const createTicketResponse = await this.ticketService.create(
        createTicketRequest,
        req.app.locals.user_id as number
      );
      res.status(200).json({
        data: createTicketResponse,
      });
    } catch (e) {
      let errorMsg = "Server error";

      if (e instanceof Error) {
        errorMsg = e.message;
      }

      res.status(500).json({ error: errorMsg });
    }
  };
}

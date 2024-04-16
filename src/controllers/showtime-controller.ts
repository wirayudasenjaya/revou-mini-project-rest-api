import express from "express";

import { ShowtimeService } from "../services/showtime-service";
import { CreateShowtimeRequest } from "../models/showtime-model";

export class ShowtimeController {
  private showtimeService: ShowtimeService;

  constructor(showtimeService: ShowtimeService) {
    this.showtimeService = showtimeService;
  }

  addShowtime = async (req: express.Request, res: express.Response) => {
    try {
      const createShowtimeRequest = req.body as CreateShowtimeRequest;

      const createShowtimeResponse = await this.showtimeService.addShowtime(
        createShowtimeRequest
      );

      res.status(200).json({
        data: createShowtimeResponse,
      });
    } catch (e) {
      let errorMsg = "Server error";

      if (e instanceof Error) {
        errorMsg = e.message;
      }

      res.status(500).json({ error: errorMsg });
    }
  };

  deleteShowtime = async (req: express.Request, res: express.Response) => {
    try {
      const showtime_id = Number(req.params.showtime_id);

      const deleteShowtime = await this.showtimeService.deleteShowtime(showtime_id);

      res.status(200).json({
        message: 'deleted',
        id: showtime_id
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

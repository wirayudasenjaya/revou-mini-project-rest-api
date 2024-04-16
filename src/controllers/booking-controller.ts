import express from 'express';

import { BookingService } from "../services/booking-service";

export class BookingController {
  private bookingService: BookingService;

	constructor(bookingService: BookingService) {
		this.bookingService = bookingService;
	}

	getAllBookings = async (req: express.Request, res: express.Response) => {
		try {
			const getBookingResponse = await this.bookingService.getAllBookings(req.app.locals.user_id as number);

			res.status(200).json({
				data: getBookingResponse
			})
		} catch (e) {
      let errorMsg = "Server error";

      if (e instanceof Error) {
        errorMsg = e.message;
      }

      res.status(500).json({ error: errorMsg });
    }
	}
}

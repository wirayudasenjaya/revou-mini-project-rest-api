import { getBookingResponse } from "../models/booking-model";
import { BookingRepository } from "../repositories/booking-repository";

export class BookingService {
  private bookingRepository: BookingRepository;

  constructor(bookingRepository: BookingRepository) {
    this.bookingRepository = bookingRepository;
  }

  async getAllBookings(user_id: number): Promise<getBookingResponse[]> {
    const booking = await this.bookingRepository.getAll(user_id);

    let getBookingResponse: getBookingResponse[] = [];

    booking.forEach((b) => {
      getBookingResponse.push({
        id: b.id,
        movie_id: b.movie_id,
        title: b.title,
        user_id: b.user_id,
        showtime_id: b.showtime_id,
        showtime: b.showtime,
        seat: b.seat,
      });
    });

    return getBookingResponse;
  }
}

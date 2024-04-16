export interface BookingModel {
  id: number;
  movie_id: number;
  title: string;
  user_id: number;
  showtime_id: number;
  showtime: string;
  seat: number;
}

export interface getAllBookings {
  id: number;
  movie_id: number;
  title: string;
  user_id: number;
  showtime_id: number;
  showtime: string;
  seat: number;
}

export interface getBookingResponse {
  id: number;
  movie_id: number;
  title: string;
  user_id: number;
  showtime_id: number;
  showtime: string;
  seat: number;
}

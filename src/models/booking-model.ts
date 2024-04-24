export interface BookingModel {
  id: number;
  movie_id: number;
  title: string;
  user_id: number;
  showtime_id: number;
  showtime: string;
  seat: number;
  status: string;
}

export interface getAllBookings {
  id: number;
  movie_id: number;
  title: string;
  user_id: number;
  showtime_id: number;
  showtime: string;
  seat: number;
  status: string;
}

export interface getBookingResponse {
  id: number;
  movie_id: number;
  title: string;
  user_id: number;
  showtime_id: number;
  showtime: string;
  seat: number;
  status: string;
}

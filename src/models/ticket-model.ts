export interface TicketModel {
  id: number,
	movie_id: number,
	user_id: number,
	showtime_id: number,
	seat: number
}

export interface CreateTicketRequest {
	movie_id: number,
	user_id: number,
	showtime_id: number,
	seat: number
}

export interface CreateTicketResponse {
	id: number
}
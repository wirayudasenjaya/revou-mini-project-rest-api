export interface ShowtimeModel {
  id: number,
	movie_id: number,
	showtime: string
}

export interface CreateShowtimeRequest {
	movie_id: number,
	showtime: string
}

export interface CreateShowtimeResponse {
	id: number
}
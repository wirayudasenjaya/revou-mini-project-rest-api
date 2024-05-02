export interface MovieModel {
  id: number;
  title: string;
  genre: string;
  duration: number;
  showtime: string;
  synopsis: string;
  cast: string;
  director: string;
  rating: number;
}

export interface GetAllMovies {
  id: number;
  title: string;
  genre: string;
  duration: number;
  showtime: string;
}

export interface GetMovieResponse {
  id: number;
  title: string;
  genre: string;
  duration: number;
  showtime: string;
}

export interface GetMovieDetailResponse {
  id: number;
  title: string;
  genre: string;
  duration: number;
  showtime: string;
  synopsis: string;
  cast: string;
  director: string;
  rating: number;
}

export interface AddMovieRequest {
  title: string;
  genre: string;
  duration: number;
  synopsis: string;
  cast: string;
  director: string;
  rating: number;
}

export interface AddMovieResponse {
  id: number
}

export interface UpdateMovieRequest {
  title: string;
  genre: string;
  duration: number;
  synopsis: string;
  cast: string;
  director: string;
  rating: number;
}

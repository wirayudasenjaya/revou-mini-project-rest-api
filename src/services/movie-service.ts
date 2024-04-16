import {
  AddMovieRequest,
  GetMovieDetailResponse,
  GetMovieResponse,
  UpdateMovieRequest,
} from "../models/movie-model";
import { MovieRepository } from "../repositories/movie-repository";

export class MovieService {
  private movieRepository: MovieRepository;

  constructor(movieRepository: MovieRepository) {
    this.movieRepository = movieRepository;
  }

  async getAllMovies(): Promise<GetMovieResponse[]> {
    const movies = await this.movieRepository.getAllMovies();

    let getMovieResponse: GetMovieResponse[] = [];

    movies.forEach((movie) => {
      getMovieResponse.push({
        id: movie.id,
        title: movie.title,
        genre: movie.genre,
        duration: movie.duration,
        showtime: movie.showtime,
      });
    });

    return getMovieResponse;
  }

  async getMovieDetail(movie_id: number): Promise<GetMovieDetailResponse> {
    const getMovieDetailResponse = await this.movieRepository.getMovieDetail(
      movie_id
    );

    return getMovieDetailResponse;
  }

  async addMovie(addMovieRequest: AddMovieRequest) {
    const movie = await this.movieRepository.addMovie({
      id: 0,
      title: addMovieRequest.title,
      genre: addMovieRequest.genre,
      showtime: '',
      duration: addMovieRequest.duration,
      synopsis: addMovieRequest.synopsis,
      cast: addMovieRequest.cast,
      director: addMovieRequest.director,
      rating: addMovieRequest.rating,
    });

    return {
      id: movie,
    };
  }

  async updateMovie(updateMovieRequest: UpdateMovieRequest, id: number) {
    const updatedMovie = await this.movieRepository.updateMovie({
      id: 0,
      title: updateMovieRequest.title,
      genre: updateMovieRequest.genre,
      showtime: '',
      duration: updateMovieRequest.duration,
      synopsis: updateMovieRequest.synopsis,
      cast: updateMovieRequest.cast,
      director: updateMovieRequest.director,
      rating: updateMovieRequest.rating,
    }, id)

    return {
      message: "updated",
    };
  }

  async deleteMovie(id: number) {
    const deletedMovie = await this.movieRepository.deleteMovie(id);

    return {
      message: "deleted",
    };
  }
}

import express from "express";

import { MovieService } from "../services/movie-service";
import { AddMovieRequest, UpdateMovieRequest } from "../models/movie-model";

export class MovieController {
  private movieService: MovieService;

  constructor(movieService: MovieService) {
    this.movieService = movieService;
  }

  getAllMovies = async (req: express.Request, res: express.Response) => {
    try {
      const getMovieResponse = await this.movieService.getAllMovies();

      res.status(200).json({
        data: getMovieResponse,
      });
    } catch (e) {
      let errorMsg = "Server error";

      if (e instanceof Error) {
        errorMsg = e.message;
      }

      res.status(500).json({ error: errorMsg });
    }
  };

  getMovieDetail = async (req: express.Request, res: express.Response) => {
    try {
      const movie_id = Number(req.params.movie_id);

      const GetMovieDetailResponse = await this.movieService.getMovieDetail(
        movie_id
      );

      res.status(200).json({
        data: GetMovieDetailResponse,
      });
    } catch (e) {
      let errorMsg = "Server error";

      if (e instanceof Error) {
        errorMsg = e.message;
      }

      res.status(500).json({ error: errorMsg });
    }
  };

  addMovie = async (req: express.Request, res: express.Response) => {
    try {
      const createMovieRequest = req.body as AddMovieRequest;

      const createMovieResponse = await this.movieService.addMovie(
        createMovieRequest
      );

      res.status(200).json({
        data: createMovieResponse,
      });
    } catch (e) {
      let errorMsg = "Server error";

      if (e instanceof Error) {
        errorMsg = e.message;
      }

      res.status(500).json({ error: errorMsg });
    }
  };

  updateMovie = async (req: express.Request, res: express.Response) => {
    try {
      const updateMovieRequest = req.body as UpdateMovieRequest;
      const movie_id = Number(req.params.movie_id);

      const updateMovieResponse = await this.movieService.updateMovie(updateMovieRequest, movie_id)

      res.status(200).json({
        data: updateMovieResponse,
      });
    } catch (e) {
      let errorMsg = "Server error";

      if (e instanceof Error) {
        errorMsg = e.message;
      }

      res.status(500).json({ error: errorMsg });
    }
  }

  deleteMovie = async (req: express.Request, res: express.Response) => {
    try {
      const movie_id = Number(req.params.movie_id);

      const deleteMovie = await this.movieService.deleteMovie(movie_id);

      res.status(200).json({
        message: 'deleted',
        id: movie_id
      });
    } catch (e) {
      let errorMsg = "Server error";

      if (e instanceof Error) {
        errorMsg = e.message;
      }

      res.status(500).json({ error: errorMsg });
    }
  }
}

import express from "express";

import { adminAuthenticationMiddleware } from "../middlewares/middleware";
import { MovieController } from "../controllers/movie-controller";

export const movieRoutes = (movieController: MovieController) => {
  const movieRouter = express.Router();
  movieRouter.get("/movies", movieController.getAllMovies);
  movieRouter.get("/movies/:movie_id", movieController.getMovieDetail);

  movieRouter.use(adminAuthenticationMiddleware);
  movieRouter.post("/movies/add", movieController.addMovie);
  movieRouter.patch("/movies/:movie_id", movieController.updateMovie);
  movieRouter.delete("/movies/:movie_id", movieController.deleteMovie);

  return movieRouter;
};

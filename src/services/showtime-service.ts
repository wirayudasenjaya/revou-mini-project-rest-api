import { CreateShowtimeRequest } from "../models/showtime-model";
import { ShowtimeRepository } from "../repositories/showtime-repository";

export class ShowtimeService {
  private showtimeRepository: ShowtimeRepository;

  constructor(showtimeRepository: ShowtimeRepository) {
    this.showtimeRepository = showtimeRepository;
  }

  async addShowtime(createShowtimeRequest: CreateShowtimeRequest) {
    const showtime = await this.showtimeRepository.addShowtime({
      id: 0,
      movie_id: createShowtimeRequest.movie_id,
      showtime: createShowtimeRequest.showtime,
    });

    return {
      id: showtime,
    };
  }

  async deleteShowtime(id: number) {
    const deleteShowtime = await this.showtimeRepository.deleteShowtime(id);

    return {
      message: "deleted",
      id: id,
    };
  }
}

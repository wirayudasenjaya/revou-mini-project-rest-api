import {
  CreateTicketRequest,
  CreateTicketResponse,
} from "../models/ticket-model";
import { TicketRepository } from "../repositories/ticket-repository";

export class TicketService {
  private ticketRepository: TicketRepository;

  constructor(ticketRepository: TicketRepository) {
    this.ticketRepository = ticketRepository;
  }

  async create(
    createTicketRequest: CreateTicketRequest,
    user_id: number
  ): Promise<CreateTicketResponse> {
    const ticket = await this.ticketRepository.create({
      id: 0,
      movie_id: createTicketRequest.movie_id,
      user_id: user_id,
      showtime_id: createTicketRequest.showtime_id,
      seat: createTicketRequest.seat,
    });

    return {
      id: ticket,
    };
  }
}

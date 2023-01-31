import CreateRatingUseCase from "../../../Application/usecases/rating/createrating.usecase"
import { RatingControllerInterface } from "../../../Domain/controllers/rating/rating.controller.interface"
import { CreateRatingResponseInterface } from "../../../Domain/responses/rating/createRating.response"
import RatingRepository from "../../repositories/rating/rating.repository"
import HttpClient from "../../utilities/http/http"

export default class RatingController implements RatingControllerInterface {
  private httpClient = new HttpClient()
  private ratingRepository = new RatingRepository(this.httpClient)

  async createRating(
    userId: string,
    mealId: string,
    rating: number
  ): Promise<CreateRatingResponseInterface> {
    const createRatingUseCase = new CreateRatingUseCase(this.ratingRepository)
    return await createRatingUseCase.execute(userId, mealId, rating)
  }
}

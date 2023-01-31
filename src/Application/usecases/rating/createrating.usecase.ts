import { RatingRepositoryInterface } from "../../../Domain/repositories/rating/rating.repository"
import { CreateRatingResponseInterface } from "../../../Domain/responses/rating/createRating.response"
import { CreateRatingUseCaseInterface } from "../../../Domain/usecases/rating/createrating.usecase"

export default class CreateRatingUseCase
  implements CreateRatingUseCaseInterface
{
  private ratingRepository: RatingRepositoryInterface
  constructor(ratingRepository: RatingRepositoryInterface) {
    this.ratingRepository = ratingRepository
  }
  async execute(
    userId: string,
    mealId: string,
    rating: number
  ): Promise<CreateRatingResponseInterface> {
    return await this.ratingRepository.createRating(userId, mealId, rating)
  }
}

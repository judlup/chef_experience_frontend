import { CreateRatingResponseInterface } from "../../responses/rating/createRating.response"

export interface RatingRepositoryInterface {
  createRating(
    userId: string,
    mealId: string,
    rating: number
  ): Promise<CreateRatingResponseInterface>
}

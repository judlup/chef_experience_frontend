import { CreateRatingResponseInterface } from "../../responses/rating/createRating.response"

export interface RatingControllerInterface {
  createRating(
    userId: string,
    mealId: string,
    rating: number
  ): Promise<CreateRatingResponseInterface>
}

import { CreateRatingResponseInterface } from "../../responses/rating/createRating.response"

export interface CreateRatingUseCaseInterface {
  execute(
    userId: string,
    mealId: string,
    rating: number
  ): Promise<CreateRatingResponseInterface>
}

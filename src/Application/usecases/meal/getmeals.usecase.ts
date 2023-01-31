import { MealRepositoryInterface } from "../../../Domain/repositories/meal/meal.repository.interface"
import { GetMealsResponseInterface } from "../../../Domain/responses/meal/getMeals.response.interface"
import { GetMealsUseCaseInterface } from "../../../Domain/usecases/meal/getmeals.usecase.interface"

export default class GetMealsUseCase implements GetMealsUseCaseInterface {
  private mealRepository: MealRepositoryInterface
  constructor(mealRepository: MealRepositoryInterface) {
    this.mealRepository = mealRepository
  }
  async execute(): Promise<GetMealsResponseInterface> {
    return await this.mealRepository.getMeals()
  }
}

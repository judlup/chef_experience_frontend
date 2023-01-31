import { MealRepositoryInterface } from "../../../Domain/repositories/meal/meal.repository.interface"
import { GetMealsByChefResponseInterface } from "../../../Domain/responses/meal/getMealsByChef.response.interface"
import { GetMealsByChefUseCaseInterface } from "../../../Domain/usecases/meal/getmealsbychef.usecase.interface"

export default class GetMealsByChefUseCase
  implements GetMealsByChefUseCaseInterface
{
  private mealRepository: MealRepositoryInterface
  constructor(mealRepository: MealRepositoryInterface) {
    this.mealRepository = mealRepository
  }
  async execute(id: string): Promise<GetMealsByChefResponseInterface> {
    return await this.mealRepository.getMealsByChef(id)
  }
}

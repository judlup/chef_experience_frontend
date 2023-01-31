import { MealInterface } from "../../../Domain/interfaces/meal/meal.interface"
import { MealRepositoryInterface } from "../../../Domain/repositories/meal/meal.repository.interface"
import { updateMealResponseInterface } from "../../../Domain/responses/meal/updateMeal.response.interface"
import { UpdateMealUseCaseInterface } from "../../../Domain/usecases/meal/updatemeal.usecase.interface"

export default class UpdateMealUseCase implements UpdateMealUseCaseInterface {
  private mealRepository: MealRepositoryInterface
  constructor(mealRepository: MealRepositoryInterface) {
    this.mealRepository = mealRepository
  }
  async execute(
    id: string,
    meal: MealInterface
  ): Promise<updateMealResponseInterface> {
    return await this.mealRepository.updateMeal(id, meal)
  }
}

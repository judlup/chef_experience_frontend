import { MealInterface } from "../../../Domain/interfaces/meal/meal.interface"
import { MealRepositoryInterface } from "../../../Domain/repositories/meal/meal.repository.interface"
import { AddMealResponseInterface } from "../../../Domain/responses/meal/addMeal.response.interface"
import { AddMealUseCaseInterface } from "../../../Domain/usecases/meal/addmeal.usecase.interface"

export default class AddMealUseCase implements AddMealUseCaseInterface {
  private mealRepository: MealRepositoryInterface
  constructor(mealRepository: MealRepositoryInterface) {
    this.mealRepository = mealRepository
  }
  async execute(meal: MealInterface): Promise<AddMealResponseInterface> {
    return await this.mealRepository.addMeal(meal)
  }
}

import { MealRepositoryInterface } from "../../../Domain/repositories/meal/meal.repository.interface"
import { deleteMealResponseInterface } from "../../../Domain/responses/meal/deleteMeal.response.interface"
import { DeleteMealUseCaseInterface } from "../../../Domain/usecases/meal/deletemeal.usecase.interface"

export default class DeleteMealUseCase implements DeleteMealUseCaseInterface {
  private mealRepository: MealRepositoryInterface
  constructor(mealRepository: MealRepositoryInterface) {
    this.mealRepository = mealRepository
  }
  async execute(id: string): Promise<deleteMealResponseInterface> {
    return await this.mealRepository.deleteMeal(id)
  }
}

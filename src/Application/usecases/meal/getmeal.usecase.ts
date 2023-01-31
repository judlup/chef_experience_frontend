import { MealRepositoryInterface } from "../../../Domain/repositories/meal/meal.repository.interface"
import { GetMealResponseInterface } from "../../../Domain/responses/meal/getMeal.response.interface"
import { GetMealUseCaseInterface } from "../../../Domain/usecases/meal/getmeal.usecase.interface"

export default class GetMealUseCase implements GetMealUseCaseInterface {
  private mealRepository: MealRepositoryInterface
  constructor(mealRepository: MealRepositoryInterface) {
    this.mealRepository = mealRepository
  }
  async execute(id: string): Promise<GetMealResponseInterface> {
    return await this.mealRepository.getMeal(id)
  }
}

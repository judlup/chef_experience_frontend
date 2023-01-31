import { MealInterface } from "../../interfaces/meal/meal.interface"
import { updateMealResponseInterface } from "../../responses/meal/updateMeal.response.interface"

export interface UpdateMealUseCaseInterface {
  execute(id: string, meal: MealInterface): Promise<updateMealResponseInterface>
}

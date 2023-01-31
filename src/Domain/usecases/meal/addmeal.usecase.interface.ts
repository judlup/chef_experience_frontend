import { MealInterface } from "../../interfaces/meal/meal.interface"
import { AddMealResponseInterface } from "../../responses/meal/addMeal.response.interface"

export interface AddMealUseCaseInterface {
  execute(meal: MealInterface): Promise<AddMealResponseInterface>
}

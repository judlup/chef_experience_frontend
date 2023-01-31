import { MealInterface } from "../../interfaces/meal/meal.interface"
import { AddMealResponseInterface } from "../../responses/meal/addMeal.response.interface"
import { deleteMealResponseInterface } from "../../responses/meal/deleteMeal.response.interface"
import { GetMealResponseInterface } from "../../responses/meal/getMeal.response.interface"
import { GetMealsResponseInterface } from "../../responses/meal/getMeals.response.interface"
import { GetMealsByChefResponseInterface } from "../../responses/meal/getMealsByChef.response.interface"
import { updateMealResponseInterface } from "../../responses/meal/updateMeal.response.interface"

export interface MealControllerInterface {
  getMeals(): Promise<GetMealsResponseInterface>
  getMeal(id: string): Promise<GetMealResponseInterface>
  addMeal(meal: MealInterface): Promise<AddMealResponseInterface>
  updateMeal(
    id: string,
    meal: MealInterface
  ): Promise<updateMealResponseInterface>
  deleteMeal(id: string): Promise<deleteMealResponseInterface>
  getMealsByChef(chefId: string): Promise<GetMealsByChefResponseInterface>
}

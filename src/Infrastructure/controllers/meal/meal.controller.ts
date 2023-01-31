import AddMealUseCase from "../../../Application/usecases/meal/addmeal.usecase"
import DeleteMealUseCase from "../../../Application/usecases/meal/deletemeal.usecase"
import GetMealUseCase from "../../../Application/usecases/meal/getmeal.usecase"
import GetMealsUseCase from "../../../Application/usecases/meal/getmeals.usecase"
import GetMealsByChefUseCase from "../../../Application/usecases/meal/getmealsbychef.usecase"
import UpdateMealUseCase from "../../../Application/usecases/meal/updatemeal.usecase"
import { MealControllerInterface } from "../../../Domain/controllers/meal/meal.controller.interface"
import { MealInterface } from "../../../Domain/interfaces/meal/meal.interface"
import MealRepository from "../../repositories/meal/meal.repository"
import HttpClient from "../../utilities/http/http"

export default class MealController implements MealControllerInterface {
  private httpClient = new HttpClient()
  private mealRepository = new MealRepository(this.httpClient)

  async getMeals() {
    const getMealsUseCase = new GetMealsUseCase(this.mealRepository)
    return await getMealsUseCase.execute()
  }
  async getMeal(id: string) {
    const getMealUseCase = new GetMealUseCase(this.mealRepository)
    return await getMealUseCase.execute(id)
  }
  async addMeal(meal: MealInterface) {
    const addMealUseCase = new AddMealUseCase(this.mealRepository)
    return await addMealUseCase.execute(meal)
  }
  async updateMeal(id: string, meal: MealInterface) {
    const updateMealUseCase = new UpdateMealUseCase(this.mealRepository)
    return await updateMealUseCase.execute(id, meal)
  }
  async deleteMeal(id: string) {
    const deleteMealUseCase = new DeleteMealUseCase(this.mealRepository)
    return await deleteMealUseCase.execute(id)
  }
  async getMealsByChef(chefId: string) {
    const getMealsByChefUseCase = new GetMealsByChefUseCase(this.mealRepository)
    return await getMealsByChefUseCase.execute(chefId)
  }
}

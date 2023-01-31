import { GetMealsResponseInterface } from "../../responses/meal/getMeals.response.interface"

export interface GetMealsUseCaseInterface {
  execute(): Promise<GetMealsResponseInterface>
}

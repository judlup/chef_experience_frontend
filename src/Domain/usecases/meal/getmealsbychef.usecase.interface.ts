import { GetMealsByChefResponseInterface } from "../../responses/meal/getMealsByChef.response.interface"

export interface GetMealsByChefUseCaseInterface {
  execute(id: string): Promise<GetMealsByChefResponseInterface>
}

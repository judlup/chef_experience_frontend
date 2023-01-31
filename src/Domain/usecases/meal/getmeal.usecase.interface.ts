import { GetMealResponseInterface } from "../../responses/meal/getMeal.response.interface"

export interface GetMealUseCaseInterface {
  execute(id: string): Promise<GetMealResponseInterface>
}

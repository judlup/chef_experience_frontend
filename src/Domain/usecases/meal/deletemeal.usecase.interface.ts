import { deleteMealResponseInterface } from "../../responses/meal/deleteMeal.response.interface"

export interface DeleteMealUseCaseInterface {
  execute(id: string): Promise<deleteMealResponseInterface>
}

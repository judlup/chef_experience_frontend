import { create } from "zustand"
import { GetMealsResponseInterface } from "../../../Domain/responses/meal/getMeals.response.interface"

const UseMealStore = create((set) => ({
  meals: [],
  chef: null,
  refreshMeals: false,
  getMeals: () => set((state: any) => ({ meals: state.meals })),
  setMeals: (meals: GetMealsResponseInterface) =>
    set((state: any) => ({ meals: meals })),
  setRefreshMeals: (refreshMeals: boolean) =>
    set((state: any) => ({ refreshMeals: refreshMeals })),
  setChef: (chef: any) => set((state: any) => ({ chef: chef })),
}))

export { UseMealStore }

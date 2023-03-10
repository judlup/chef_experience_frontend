import { useEffect } from "react"
import { UserRoleEnum } from "../../../../Domain/enums/user/user.enum"
import MealController from "../../../controllers/meal/meal.controller"
import { LocalStorage } from "../../../utilities/localstorage/localstorage"
import { UseMealStore } from "../../../zustand/meal/meal.store"
import ListMealsView from "./list.meals.view"

const ListMealsContainer = () => {
  const mealController = new MealController()
  const mealStore = UseMealStore((state: any) => state)
  const localStorage = new LocalStorage()
  const user = localStorage.get("user")
    ? JSON.parse(localStorage.get("user"))
    : null

  const getMeals = async () => {
    let meals

    if (user.role === UserRoleEnum.CHEF) {
      meals = await (await mealController.getMealsByChef(user.id)).data
      mealStore.setMeals(meals)
    } else if (mealStore.chef === null) {
      meals = await (await mealController.getMeals()).data
      mealStore.setMeals(meals)
    } else {
      meals = await (await mealController.getMealsByChef(mealStore.chef)).data
      mealStore.setMeals(meals)
    }
  }

  useEffect(() => {
    getMeals()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (mealStore.refreshMeals) {
      getMeals()
      mealStore.setRefreshMeals(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mealStore.refreshMeals])

  return (
    <>
      <ListMealsView meals={mealStore.meals} />
    </>
  )
}

export default ListMealsContainer

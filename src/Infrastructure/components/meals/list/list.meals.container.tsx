import { useEffect } from "react"
import MealController from "../../../controllers/meal/meal.controller"
import { UseMealStore } from "../../../zustand/meal/meal.store"
import ListMealsView from "./list.meals.view"

const ListMealsContainer = () => {
  const mealController = new MealController()
  const mealStore = UseMealStore((state: any) => state)
  const getMeals = async () => {
    let meals
    if (mealStore.chef === null) {
      meals = await (await mealController.getMeals()).data
      mealStore.setMeals(meals)
    } else {
      meals = await (await mealController.getMealsByChef(mealStore.chef)).data
      mealStore.setMeals(meals)
    }
  }

  useEffect(() => {
    getMeals()
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

import { useEffect, useState } from "react"
import { MealInterface } from "../../../../Domain/interfaces/meal/meal.interface"
import MealController from "../../../controllers/meal/meal.controller"
import ListMealsView from "./list.meals.view"

const ListMealsContainer = () => {
  const mealController = new MealController()
  const [meals, setMeals] = useState<MealInterface[]>()
  let refresh = false
  const getMeals = async () => {
    const meals = await (await mealController.getMeals()).data
    setMeals(meals)
  }

  useEffect(() => {
    getMeals()
  }, [])

  return (
    <>
      <ListMealsView meals={meals} />
    </>
  )
}

export default ListMealsContainer

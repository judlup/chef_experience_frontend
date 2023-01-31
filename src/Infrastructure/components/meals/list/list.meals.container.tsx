import { useEffect, useState } from "react"
import { MealInterface } from "../../../../Domain/interfaces/meal/meal.interface"
import MealController from "../../../controllers/meal/meal.controller"
import ListMealsView from "./list.meals.view"

const ListMealsContainer = () => {
  const mealController = new MealController()
  const [meals, setMeals] = useState<MealInterface[]>()

  const getMeals = async () => {
    const meals = await (await mealController.getMeals()).data
    console.log(meals, "meals")
    setMeals(meals)
  }

  useEffect(() => {
    getMeals()
  }, [])

  // const handleSelectedChed = (chef: UserInterface) => {
  //   console.log(chef)
  // }
  return (
    <>
      <ListMealsView meals={meals} />
    </>
  )
}

export default ListMealsContainer

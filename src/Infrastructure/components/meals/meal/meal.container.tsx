import { MealInterface } from "../../../../Domain/interfaces/meal/meal.interface"
import RatingController from "../../../controllers/rating/rating.controller"
import { LocalStorage } from "../../../utilities/localstorage/localstorage"
import MealView from "./meal.view"

interface MealContainerProps {
  meal: MealInterface
}

const MealContainer = ({ meal }: MealContainerProps) => {
  const ratingController = new RatingController()
  const localStorage = new LocalStorage()

  const handleRating = async (rate: number) => {
    const userInfo = JSON.parse(localStorage.get("user"))
    const mealId = meal.id
    await ratingController.createRating(userInfo.id, mealId, rate)
  }
  return (
    <>
      <MealView meal={meal} handleRating={handleRating} />
    </>
  )
}

export default MealContainer

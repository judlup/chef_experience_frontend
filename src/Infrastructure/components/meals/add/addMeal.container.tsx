import { ChangeEvent, useState } from "react"
import { MealInterface } from "../../../../Domain/interfaces/meal/meal.interface"
import MealController from "../../../controllers/meal/meal.controller"
import { LocalStorage } from "../../../utilities/localstorage/localstorage"
import { toastSuccess } from "../../../utilities/toast/toast"
import { UseMealStore } from "../../../zustand/meal/meal.store"
import AddMealView from "./addMeal.view"

interface AddMealContainerProps {
  handleClose: () => void
}

const AddMealContainer = ({ handleClose }: AddMealContainerProps) => {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState(0)
  const [imageUrl, setImageUrl] = useState("")
  const localStorage = new LocalStorage()
  const userInfo = JSON.parse(localStorage.get("user"))
  const mealController = new MealController()
  const mealStore = UseMealStore((state: any) => state)

  const onChageName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }
  const onChageDescription = (event: ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value)
  }
  const onChagePrice = (event: ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(event.target.value))
  }
  const onChageUrl = (event: ChangeEvent<HTMLInputElement>) => {
    setImageUrl(event.target.value)
  }
  const handleSubmit = async () => {
    const newMeal = {
      name,
      description,
      price,
      image: imageUrl,
      chef_id: userInfo.id,
    } as MealInterface
    await mealController.addMeal(newMeal)
    toastSuccess("Meal added successfully")
    mealStore.setRefreshMeals(true)
    handleClose()
  }
  return (
    <>
      <AddMealView
        name={name}
        description={description}
        price={price}
        imageUrl={imageUrl}
        onChageName={onChageName}
        onChageDescription={onChageDescription}
        onChagePrice={onChagePrice}
        onChageImageUrl={onChageUrl}
        handleSubmit={handleSubmit}
      />
    </>
  )
}

export default AddMealContainer

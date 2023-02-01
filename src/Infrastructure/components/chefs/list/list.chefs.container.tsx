import { useEffect, useState } from "react"
import { UserInterface } from "../../../../Domain/interfaces/user/user.interface"
import UserController from "../../../controllers/user/user.controller"
import { LocalStorage } from "../../../utilities/localstorage/localstorage"
import { UseMealStore } from "../../../zustand/meal/meal.store"
import ListChefsView from "./list.chefs.view"

const ListChefsContainer = () => {
  const userController = new UserController()
  const localStorage = new LocalStorage()
  const userRol = JSON.parse(localStorage.get("user")).role || null
  const mealStore = UseMealStore((state: any) => state)
  const [chefs, setChefs] = useState<UserInterface[]>()

  const getChefs = async () => {
    const chefs = await (await userController.getChefs()).data
    setChefs(chefs)
  }

  useEffect(() => {
    getChefs()
  }, [])

  const handleSelectedChed = (chef: UserInterface) => {
    mealStore.setChef(chef.id)
    mealStore.setRefreshMeals(true)
  }

  const clearChef = () => {
    mealStore.setChef(null)
    mealStore.setRefreshMeals(true)
  }

  return (
    <>
      {userRol === "admin" || userRol === "user" ? (
        <ListChefsView
          userRol={userRol}
          chefs={chefs}
          handleSelectChef={handleSelectedChed}
          clearChef={clearChef}
        />
      ) : (
        ""
      )}
    </>
  )
}

export default ListChefsContainer

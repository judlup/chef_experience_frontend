import { useEffect, useState } from "react"
import { UserInterface } from "../../../../Domain/interfaces/user/user.interface"
import UserController from "../../../controllers/user/user.controller"
import ListChefsView from "./list.chefs.view"

const ListChefsContainer = () => {
  const userController = new UserController()
  const [chefs, setChefs] = useState<UserInterface[]>()

  const getChefs = async () => {
    const chefs = await (await userController.getChefs()).data
    setChefs(chefs)
  }

  useEffect(() => {
    getChefs()
  }, [])

  const handleSelectedChed = (chef: UserInterface) => {
    console.log(chef)
  }

  return (
    <>
      <ListChefsView chefs={chefs} handleSelectChef={handleSelectedChed} />
    </>
  )
}

export default ListChefsContainer

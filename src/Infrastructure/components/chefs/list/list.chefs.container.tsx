import { useEffect, useState } from "react"
import { GetChefsResponseInterface } from "../../../../Domain/responses/user/chef/getchefs.response"
import UserController from "../../../controllers/user/user.controller"
import ListChefsView from "./list.chefs.view"

const ListChefsContainer = () => {
  const userController = new UserController()
  const [chefs, setChefs] = useState<GetChefsResponseInterface>()

  const getChefs = async () => {
    const chefs = await userController.getChefs()
    setChefs(chefs)
  }

  useEffect(() => {
    getChefs()
  }, [])

  return (
    <>
      {/* // WIP validar que se esté enviando el token en la peticións */}
      {console.log(chefs)}
      <ListChefsView />
    </>
  )
}

export default ListChefsContainer

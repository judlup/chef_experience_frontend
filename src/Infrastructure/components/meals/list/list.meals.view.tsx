import AddIcon from "@mui/icons-material/Add"
import { Button, Grid, Modal } from "@mui/material"
import { useState } from "react"
import { UserRoleEnum } from "../../../../Domain/enums/user/user.enum"
import { MealInterface } from "../../../../Domain/interfaces/meal/meal.interface"
import { LocalStorage } from "../../../utilities/localstorage/localstorage"
import AddMealContainer from "../add/addMeal.container"
import MealContainer from "../meal/meal.container"

interface ListMealsViewProps {
  meals: MealInterface[] | undefined
}

const ListMealsView = ({ meals }: ListMealsViewProps) => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const localStorage = new LocalStorage()
  const userRol = localStorage.get("user")
    ? JSON.parse(localStorage.get("user")).role
    : null
  return (
    <>
      {userRol === UserRoleEnum.ADMIN || userRol === UserRoleEnum.CHEF ? (
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleOpen}
        >
          Add Meal
        </Button>
      ) : (
        ""
      )}
      <Modal open={open} onClose={handleClose}>
        <>
          <AddMealContainer handleClose={handleClose} />
        </>
      </Modal>
      <Grid container>
        {meals?.map((meal) => (
          <MealContainer key={meal.id} meal={meal} />
        ))}
      </Grid>
    </>
  )
}

export default ListMealsView

import AddIcon from "@mui/icons-material/Add"
import { Alert, Button, Grid, Modal } from "@mui/material"
import { useState } from "react"
import { UserRoleEnum } from "../../../../Domain/enums/user/user.enum"
import { MealInterface } from "../../../../Domain/interfaces/meal/meal.interface"
import { LocalStorage } from "../../../utilities/localstorage/localstorage"
import AddMealContainer from "../add/addMeal.container"
import MealContainer from "../meal/meal.container"

interface ListMealsViewProps {
  meals: MealInterface[]
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
      {meals?.length > 0 ? (
        <Grid container>
          {meals?.map((meal) => (
            <MealContainer key={meal.id} meal={meal} />
          ))}
        </Grid>
      ) : (
        <>
          <Alert severity="info" sx={{ mt: 2 }}>
            No meals added yet{" "}
          </Alert>
        </>
      )}
    </>
  )
}

export default ListMealsView

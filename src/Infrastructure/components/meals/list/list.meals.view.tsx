import AddIcon from "@mui/icons-material/Add"
import { Button, Grid, Modal } from "@mui/material"
import { useState } from "react"
import { MealInterface } from "../../../../Domain/interfaces/meal/meal.interface"
import AddMealContainer from "../add/addMeal.container"
import MealContainer from "../meal/meal.container"

interface ListMealsViewProps {
  meals: MealInterface[] | undefined
}

const ListMealsView = ({ meals }: ListMealsViewProps) => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (
    <>
      <Button variant="contained" startIcon={<AddIcon />} onClick={handleOpen}>
        Add Meal
      </Button>
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

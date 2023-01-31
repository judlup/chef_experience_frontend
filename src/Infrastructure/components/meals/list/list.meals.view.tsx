import { Grid } from "@mui/material"
import { MealInterface } from "../../../../Domain/interfaces/meal/meal.interface"
import MealContainer from "../meal/meal.container"

interface ListMealsViewProps {
  meals: MealInterface[] | undefined
}

const ListMealsView = ({ meals }: ListMealsViewProps) => {
  return (
    <>
      <Grid container>
        {meals?.map((meal) => (
          <MealContainer key={meal.id} meal={meal} />
        ))}
      </Grid>
    </>
  )
}

export default ListMealsView

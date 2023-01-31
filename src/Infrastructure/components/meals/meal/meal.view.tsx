import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material"
import { red } from "@mui/material/colors"
import { Rating } from "react-simple-star-rating"
import { MealInterface } from "../../../../Domain/interfaces/meal/meal.interface"

interface MealViewProps {
  meal: MealInterface
  handleRating: (rate: number) => void
}

const MealView = ({ meal, handleRating }: MealViewProps) => {
  return (
    <>
      <Card sx={{ maxWidth: 345, mr: 2, mb: 2, mt: 3 }} key={meal.id}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          title={meal.name}
          subheader={`$ ${meal.price}`}
        />
        <CardMedia
          component="img"
          height="350"
          image={meal.image}
          alt={meal.name}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {meal.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Rating onClick={handleRating} initialValue={meal.average} /> (
          {meal.ratings?.length})
        </CardActions>
      </Card>
    </>
  )
}

export default MealView

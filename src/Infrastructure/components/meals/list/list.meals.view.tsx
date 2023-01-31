import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material"
import { red } from "@mui/material/colors"
import { MealInterface } from "../../../../Domain/interfaces/meal/meal.interface"

interface ListMealsViewProps {
  meals: MealInterface[] | undefined
}

const ListMealsView = ({ meals }: ListMealsViewProps) => {
  return (
    <>
      {/*  */}
      <Grid container>
        {meals?.map((meal) => (
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
              <IconButton aria-label="add to favorites">
                {/* <FavoriteIcon /> */}
              </IconButton>
              <IconButton aria-label="share">{/* <ShareIcon /> */}</IconButton>
              {/* <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore> */}
            </CardActions>
          </Card>
        ))}
      </Grid>
      {/*  */}
    </>
  )
}

export default ListMealsView

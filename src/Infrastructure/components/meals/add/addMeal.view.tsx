import SaveIcon from "@mui/icons-material/Save"
import {
  Box,
  Button,
  Container,
  Divider,
  TextField,
  Typography,
} from "@mui/material"
import styles from "./addMeal.module.scss"

interface AddMealViewProps {
  name: string
  description: string
  price: number
  imageUrl: string
  onChageName: (event: React.ChangeEvent<HTMLInputElement>) => void
  onChageDescription: (event: React.ChangeEvent<HTMLInputElement>) => void
  onChagePrice: (event: React.ChangeEvent<HTMLInputElement>) => void
  onChageImageUrl: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleSubmit: () => void
}

const AddMealView = ({
  name,
  description,
  price,
  imageUrl,
  onChageName,
  onChagePrice,
  onChageDescription,
  onChageImageUrl,
  handleSubmit,
}: AddMealViewProps) => {
  return (
    <>
      <Container component="main" maxWidth="xs">
        <Box className={styles.ModalStyle}>
          <Typography component="h1" variant="h5">
            Add Meal
          </Typography>
          <Divider />
          <TextField
            required
            margin="normal"
            autoFocus
            fullWidth
            id="name"
            label="Name"
            variant="outlined"
            onChange={onChageName}
            value={name}
          />
          <TextField
            fullWidth
            margin="normal"
            required
            id="description"
            label="Description"
            variant="outlined"
            onChange={onChageDescription}
            value={description}
          />
          <TextField
            fullWidth
            margin="normal"
            required
            id="price"
            label="Price"
            variant="outlined"
            type="number"
            onChange={onChagePrice}
            value={price}
          />
          <TextField
            fullWidth
            margin="normal"
            required
            id="url"
            label="Url"
            variant="outlined"
            type="url"
            onChange={onChageImageUrl}
            value={imageUrl}
          />
          <Button
            variant="contained"
            fullWidth
            type="button"
            onClick={() => {
              handleSubmit()
            }}
          >
            <SaveIcon /> Save
          </Button>
        </Box>
      </Container>
    </>
  )
}

export default AddMealView

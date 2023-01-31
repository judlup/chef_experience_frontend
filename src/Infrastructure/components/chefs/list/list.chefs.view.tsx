import { Avatar, Grid } from "@mui/material"
import { UserInterface } from "../../../../Domain/interfaces/user/user.interface"
import styles from "./list.chefs.module.scss"

interface ListChefsViewProps {
  chefs: UserInterface[] | undefined
  handleSelectChef: (chef: UserInterface) => void
}

const ListChefsView = ({ chefs, handleSelectChef }: ListChefsViewProps) => {
  return (
    <>
      <Grid container spacing={2} minHeight={160} className={styles.chefList}>
        <Grid sx={{ m: 2 }}>
          <h3>Select a chef</h3>
        </Grid>
        <Grid
          xl
          display="flex"
          justifyContent="start"
          alignItems="space-between"
          container
          spacing={1}
        >
          {chefs?.map((chef) => (
            <Avatar
              key={chef.id}
              src="/static/images/avatar/1.jpg"
              className={styles.chefPicture}
              alt={chef.username}
              title={chef.username}
              onClick={() => handleSelectChef(chef)}
            />
          ))}
        </Grid>
      </Grid>
    </>
  )
}

export default ListChefsView

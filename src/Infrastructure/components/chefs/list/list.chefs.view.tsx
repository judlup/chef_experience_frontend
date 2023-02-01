import CleaningServicesIcon from "@mui/icons-material/CleaningServices"
import { Avatar, Container, Grid } from "@mui/material"
import { UserInterface } from "../../../../Domain/interfaces/user/user.interface"
import styles from "./list.chefs.module.scss"

interface ListChefsViewProps {
  chefs: UserInterface[] | undefined
  userRol: string | null
  handleSelectChef: (chef: UserInterface) => void
  clearChef: () => void
}

const ListChefsView = ({
  chefs,
  handleSelectChef,
  clearChef,
  userRol,
}: ListChefsViewProps) => {
  return (
    <>
      <Grid container spacing={2} minHeight={160} className={styles.chefList}>
        <Grid sx={{ m: 2 }}>
          <h3>
            Select a chef{" "}
            <CleaningServicesIcon
              sx={{ width: 16, height: 16, color: "gray", cursor: "pointer" }}
              onClick={() => clearChef()}
            />
          </h3>
        </Grid>
        <Container maxWidth="xl">
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
                sx={{ cursor: "pointer" }}
              />
            ))}
          </Grid>
        </Container>
      </Grid>
    </>
  )
}

export default ListChefsView

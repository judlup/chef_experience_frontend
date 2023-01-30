import { Avatar, Container, Grid } from "@mui/material"
import styles from "./list.chefs.module.scss"

const ListChefsView = () => {
  return (
    <>
      <Grid container spacing={2} minHeight={160} className={styles.chefList}>
        <Grid xs={12} sx={{ m: 2 }}>
          <h3>Select a chef</h3>
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
            <Avatar
              src="/static/images/avatar/1.jpg"
              className={styles.chefPicture}
              alt="Remy Sharp"
              title="Remy Sharp"
            />
            <Avatar
              src="/static/images/avatar/2.jpg"
              className={styles.chefPicture}
              alt="John Doe"
              title="John Doe"
            />
          </Grid>
        </Container>
      </Grid>
    </>
  )
}

export default ListChefsView

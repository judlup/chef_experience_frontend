import { Container, Grid } from "@mui/material"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { LocalStorage } from "../../utilities/localstorage/localstorage"
import ListChefsContainer from "../chefs/list/list.chefs.container"

const DashboardContainer = () => {
  const navigate = useNavigate()
  const localStorage = new LocalStorage()

  useEffect(() => {
    const auth = localStorage.get("auth")
    if (auth !== "true") {
      navigate("/login")
    }
  }, [])
  return (
    <>
      <Container maxWidth="xl" fixed>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <ListChefsContainer />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default DashboardContainer

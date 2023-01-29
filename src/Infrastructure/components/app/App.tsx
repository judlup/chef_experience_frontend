import AppRoutes from "../../routes/app/app.route"
import NavbarContainer from "../general/navbar/navbar.container"
import "./App.scss"

const App = () => {
  return (
    <>
      <NavbarContainer />
      <AppRoutes />
    </>
  )
}

export default App

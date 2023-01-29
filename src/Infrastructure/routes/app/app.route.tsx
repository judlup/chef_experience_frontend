import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginContainer from "../../components/login/login.container"

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default AppRoutes

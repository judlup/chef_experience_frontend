import { Route, Routes } from "react-router-dom"
import DashboardContainer from "../../components/dashboard/dashboard.container"
import LoginContainer from "../../components/login/login.container"
import RegisterContainer from "../../components/register/register.container"

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginContainer />} />
        <Route path="/login" element={<LoginContainer />} />
        <Route path="/signup" element={<RegisterContainer />} />
        <Route path="/dashboard" element={<DashboardContainer />} />
      </Routes>
    </>
  )
}

export default AppRoutes

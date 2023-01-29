import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { LocalStorage } from "../../utilities/localstorage/localstorage"

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
      <h1>Dashboard</h1>
    </>
  )
}

export default DashboardContainer

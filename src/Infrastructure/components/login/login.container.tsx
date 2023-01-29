import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import UserController from "../../controllers/user/user.controller"
import { LocalStorage } from "../../utilities/localstorage/localstorage"
import { toastError, toastSuccess } from "../../utilities/toast/toast"
import LoginView from "./login.view"

const LoginContainer = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const localStorage = new LocalStorage()

  useEffect(() => {
    const auth = localStorage.get("auth")
    if (auth === "true") {
      navigate("/dashboard")
    }
  }, [])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const userController = new UserController()
    try {
      const res = await userController.login(username, password)
      const localStorage = new LocalStorage()
      setUsername("")
      setPassword("")
      localStorage.set("token", res.data.token)
      localStorage.set("auth", "true")
      toastSuccess("Login success")
      navigate("/dashboard")
    } catch (err) {
      toastError("Error, Invalid credentials")
    }
  }

  const onChageUsermame = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value)
  }

  const onChagePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const handleGoToRegister = () => {
    navigate("/signup")
  }

  return (
    <>
      <LoginView
        username={username}
        password={password}
        handleSubmit={handleSubmit}
        handleGoToRegister={handleGoToRegister}
        onChagePassword={onChagePassword}
        onChageUsermame={onChageUsermame}
      />
    </>
  )
}

export default LoginContainer

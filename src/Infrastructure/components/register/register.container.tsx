import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { UserRoleEnum } from "../../../Domain/enums/user/user.enum"
import UserController from "../../controllers/user/user.controller"
import { LocalStorage } from "../../utilities/localstorage/localstorage"
import { toastError, toastSuccess } from "../../utilities/toast/toast"
import RegisterView from "./register.view.container"

const RegisterContainer = () => {
  const [role, setRole] = useState<string>(UserRoleEnum.USER)
  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [confirmPassword, setConfirmPassword] = useState<string>("")
  const [disableSubmit, setDiseableSubmit] = useState<boolean>(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (password === confirmPassword && password !== "" && username !== "") {
      setDiseableSubmit(false)
    } else {
      setDiseableSubmit(true)
    }
  }, [confirmPassword, password, username])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const userController = new UserController()
    try {
      const res = await userController.register(username, password, role)
      const localStorage = new LocalStorage()
      setUsername("")
      setPassword("")
      setConfirmPassword("")
      setRole(UserRoleEnum.USER)
      toastSuccess("Sign Up success")
      navigate("/login")
    } catch (err) {
      toastError("Error, Invalid credentials")
    }
  }

  const handleRoleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRole(event.target.value)
  }

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value)
  }

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const handleConfirmPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(event.target.value)
  }

  return (
    <>
      <RegisterView
        userRol={role}
        username={username}
        password={password}
        confirmPassword={confirmPassword}
        disableSubmit={disableSubmit}
        handleSubmit={handleSubmit}
        handleRoleChange={handleRoleChange}
        handleUsernameChange={handleUsernameChange}
        handlePasswordChange={handlePasswordChange}
        handleConfirmPasswordChange={handleConfirmPasswordChange}
      />
    </>
  )
}

export default RegisterContainer

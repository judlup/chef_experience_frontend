import * as React from "react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { LocalStorage } from "../../../utilities/localstorage/localstorage"
import { toastInfo } from "../../../utilities/toast/toast"
import NavbarView from "./navbar.view"

const NavbarContainer = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  )
  const localStorage = new LocalStorage()
  const navigate = useNavigate()
  const [isAuth, setIsAuth] = React.useState("false")
  const userInfo = localStorage.get("user")
    ? JSON.parse(localStorage.get("user"))
    : []

  useEffect(() => {
    setIsAuth(localStorage.get("auth") || "false")
  }, [localStorage])

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const handleLogout = () => {
    localStorage.remove("auth")
    localStorage.remove("user")
    localStorage.remove("token")
    toastInfo("Logout success")
    navigate("/login")
  }

  return (
    <>
      <NavbarView
        userInfo={userInfo}
        isAuthenticated={isAuth}
        anchorElNav={anchorElNav}
        anchorElUser={anchorElUser}
        handleOpenNavMenu={handleOpenNavMenu}
        handleOpenUserMenu={handleOpenUserMenu}
        handleCloseNavMenu={handleCloseNavMenu}
        handleCloseUserMenu={handleCloseUserMenu}
        handleLogout={handleLogout}
      ></NavbarView>
    </>
  )
}
export default NavbarContainer

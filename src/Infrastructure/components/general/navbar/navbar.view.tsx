import LocalDining from "@mui/icons-material/LocalDining"
import MenuIcon from "@mui/icons-material/Menu"
import {
  AppBar,
  Avatar,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

interface NavbarViewProps {
  isAuthenticated: string
  anchorElNav: null | HTMLElement
  anchorElUser: null | HTMLElement
  handleOpenNavMenu: (event: React.MouseEvent<HTMLElement>) => void
  handleOpenUserMenu: (event: React.MouseEvent<HTMLElement>) => void
  handleCloseNavMenu: () => void
  handleCloseUserMenu: () => void
  handleLogout: () => void
}

const NavbarView = ({
  isAuthenticated,
  anchorElNav,
  anchorElUser,
  handleOpenNavMenu,
  handleOpenUserMenu,
  handleCloseNavMenu,
  handleCloseUserMenu,
  handleLogout,
}: NavbarViewProps) => {
  return (
    <>
      <AppBar position="static" color="primary">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <LocalDining sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              CookUnity
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              ></Menu>
            </Box>
            <LocalDining sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              CookUnity
            </Typography>
            <Box
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            ></Box>

            <Box sx={{ flexGrow: 0 }}>
              {isAuthenticated === "true" ? (
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Julian Luna"
                      src="/static/images/avatar/2.jpg"
                    />
                  </IconButton>
                </Tooltip>
              ) : (
                ""
              )}
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" onClick={handleLogout}>
                    Logout
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <ToastContainer />
    </>
  )
}

export default NavbarView

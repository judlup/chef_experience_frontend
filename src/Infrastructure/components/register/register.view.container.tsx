import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material"
import { Link } from "react-router-dom"
import { UserRoleEnum } from "../../../Domain/enums/user/user.enum"
interface RegisterContainerProps {
  userRol: string
  username: string
  password: string
  confirmPassword: string
  disableSubmit: boolean
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  handleRoleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleUsernameChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  handlePasswordChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleConfirmPasswordChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void
}

const RegisterView = ({
  userRol,
  username,
  password,
  confirmPassword,
  disableSubmit,
  handleSubmit,
  handleRoleChange,
  handleUsernameChange,
  handlePasswordChange,
  handleConfirmPasswordChange,
}: RegisterContainerProps) => {
  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            sx={{ m: 3, bgcolor: "primary.main", width: 200, height: 200 }}
          ></Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <RadioGroup
                  row
                  aria-labelledby="role-aria-label"
                  name="user-role"
                  sx={{ display: "flex", justifyContent: "space-around" }}
                  onChange={handleRoleChange}
                  value={userRol}
                  defaultValue={UserRoleEnum.USER}
                >
                  <FormControlLabel
                    value={UserRoleEnum.USER}
                    control={<Radio />}
                    label="user"
                  />
                  <FormControlLabel
                    value={UserRoleEnum.CHEF}
                    control={<Radio />}
                    label="Chef"
                  />
                </RadioGroup>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="email"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  autoFocus
                  onChange={handleUsernameChange}
                  value={username}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={handlePasswordChange}
                  value={password}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirm_password"
                  label="Confirm password"
                  type="password"
                  id="confirm_password"
                  autoComplete="new-password"
                  onChange={handleConfirmPasswordChange}
                  value={confirmPassword}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={disableSubmit}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/login">Already have an account? Sign in</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default RegisterView

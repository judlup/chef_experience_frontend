import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  Divider,
  FormControlLabel,
  TextField,
} from "@mui/material"

interface LoginViewProps {
  username: string
  password: string
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  handleGoToRegister: () => void
  onChageUsermame: (event: React.ChangeEvent<HTMLInputElement>) => void
  onChagePassword: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const LoginView = ({
  username,
  password,
  handleSubmit,
  handleGoToRegister,
  onChageUsermame,
  onChagePassword,
}: LoginViewProps) => {
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
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={onChageUsermame}
              value={username}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={onChagePassword}
              value={password}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Divider />
            <Button
              type="button"
              fullWidth
              variant="outlined"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleGoToRegister}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default LoginView

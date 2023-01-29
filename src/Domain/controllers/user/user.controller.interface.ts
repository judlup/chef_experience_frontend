import { LoginResponseInterface } from "../../responses/user/login/login.response"

export interface UserControllerInterface {
  login(username: string, password: string): Promise<LoginResponseInterface>
}

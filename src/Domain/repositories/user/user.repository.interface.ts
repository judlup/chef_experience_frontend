import { LoginResponseInterface } from "../../responses/user/login/login.response"

export interface UserRepositoryInterface {
  login(username: string, password: string): Promise<LoginResponseInterface>
}

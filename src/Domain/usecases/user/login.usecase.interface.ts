import { LoginResponseInterface } from "../../responses/user/login/login.response"

export interface LoginUseCaseInterface {
  execute(username: string, password: string): Promise<LoginResponseInterface>
}

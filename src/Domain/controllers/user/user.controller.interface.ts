import { GetChefsResponseInterface } from "../../responses/user/chef/getchefs.response"
import { LoginResponseInterface } from "../../responses/user/login/login.response"
import { RegisterResponseInterface } from "../../responses/user/register/register.response"

export interface UserControllerInterface {
  login(username: string, password: string): Promise<LoginResponseInterface>
  register(
    username: string,
    password: string,
    role: string
  ): Promise<RegisterResponseInterface>
  getChefs(): Promise<GetChefsResponseInterface>
}

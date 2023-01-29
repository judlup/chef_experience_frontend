import { RegisterResponseInterface } from "../../responses/user/register/register.response"

export interface RegisterUseCaseInterface {
  execute(
    username: string,
    password: string,
    role: string
  ): Promise<RegisterResponseInterface>
}

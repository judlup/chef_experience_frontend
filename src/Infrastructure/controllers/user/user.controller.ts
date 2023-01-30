import GetChefsUseCase from "../../../Application/usecases/user/getchefs.usecase"
import LoginUseCase from "../../../Application/usecases/user/login.usecase"
import RegisterUseCase from "../../../Application/usecases/user/register.usecase"
import { UserControllerInterface } from "../../../Domain/controllers/user/user.controller.interface"
import { GetChefsResponseInterface } from "../../../Domain/responses/user/chef/getchefs.response"
import { LoginResponseInterface } from "../../../Domain/responses/user/login/login.response"
import { RegisterResponseInterface } from "../../../Domain/responses/user/register/register.response"
import UserRepository from "../../repositories/user/user.repository"
import HttpClient from "../../utilities/http/http"

export default class UserController implements UserControllerInterface {
  private httpClient = new HttpClient()
  private userRepository = new UserRepository(this.httpClient)

  async login(
    username: string,
    password: string
  ): Promise<LoginResponseInterface> {
    const loginUseCase = new LoginUseCase(this.userRepository)
    return await loginUseCase.execute(username, password)
  }

  async register(
    username: string,
    password: string,
    role: string
  ): Promise<RegisterResponseInterface> {
    const registerUseCase = new RegisterUseCase(this.userRepository)
    return await registerUseCase.execute(username, password, role)
  }

  async getChefs(): Promise<GetChefsResponseInterface> {
    const getChefsUseCase = new GetChefsUseCase(this.userRepository)
    return await getChefsUseCase.execute()
  }
}

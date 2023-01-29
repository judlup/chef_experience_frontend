import LoginUseCase from "../../../Application/usecases/user/login.usecase"
import { UserControllerInterface } from "../../../Domain/controllers/user/user.controller.interface"
import { LoginResponseInterface } from "../../../Domain/responses/user/login/login.response"
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
}

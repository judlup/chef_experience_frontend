import { LoginResponseInterface } from "../../../Domain/responses/user/login/login.response"
import { LoginUseCaseInterface } from "../../../Domain/usecases/user/login.usecase.interface"
import UserRepository from "../../../Infrastructure/repositories/user/user.repository"

export default class LoginUseCase implements LoginUseCaseInterface {
  private userRepository: UserRepository
  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository
  }
  async execute(
    username: string,
    password: string
  ): Promise<LoginResponseInterface> {
    return await this.userRepository.login(username, password)
  }
}

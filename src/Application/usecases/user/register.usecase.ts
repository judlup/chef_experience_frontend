import { RegisterResponseInterface } from "../../../Domain/responses/user/register/register.response"
import { RegisterUseCaseInterface } from "../../../Domain/usecases/user/register.usecase.interace"
import UserRepository from "../../../Infrastructure/repositories/user/user.repository"

export default class RegisterUseCase implements RegisterUseCaseInterface {
  private userRepository: UserRepository
  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository
  }
  async execute(
    username: string,
    password: string,
    role: string
  ): Promise<RegisterResponseInterface> {
    return await this.userRepository.register(username, password, role)
  }
}

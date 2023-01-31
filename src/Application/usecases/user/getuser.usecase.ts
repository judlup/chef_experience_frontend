import { GetUserResponseInterface } from "../../../Domain/responses/user/getuser.response"
import { GetUserUseCaseInterface } from "../../../Domain/usecases/user/getuser.usecase.interface"
import UserRepository from "../../../Infrastructure/repositories/user/user.repository"

export default class GetUserUseCase implements GetUserUseCaseInterface {
  private userRepository: UserRepository
  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository
  }
  async execute(id: string): Promise<GetUserResponseInterface> {
    return await this.userRepository.getUser(id)
  }
}

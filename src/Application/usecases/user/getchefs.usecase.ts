import { GetChefsResponseInterface } from "../../../Domain/responses/user/chef/getchefs.response"
import { GetChefsUseCaseInterface } from "../../../Domain/usecases/user/getchefs.usecase.interface"
import UserRepository from "../../../Infrastructure/repositories/user/user.repository"

export default class GetChefsUseCase implements GetChefsUseCaseInterface {
  private userRepository: UserRepository
  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository
  }
  async execute(): Promise<GetChefsResponseInterface> {
    return await this.userRepository.getChefs()
  }
}

import { GetUserResponseInterface } from "../../responses/user/getuser.response"

export interface GetUserUseCaseInterface {
  execute(id: string): Promise<GetUserResponseInterface>
}

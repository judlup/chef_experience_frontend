import { GetChefsResponseInterface } from "../../responses/user/chef/getchefs.response"

export interface GetChefsUseCaseInterface {
  execute(): Promise<GetChefsResponseInterface>
}

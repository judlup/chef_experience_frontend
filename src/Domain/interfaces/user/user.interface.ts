import { UserRoleEnum } from "../../enums/user/user.enum"

export interface UserInterface {
  id: string
  username: string
  role: UserRoleEnum
  status: boolean
  createdAt: Date
  updatedAt: Date
}

import { UserInterface } from "../user/user.interface"

export interface RatingInterface {
  id: string
  rating: number
  user: UserInterface
}

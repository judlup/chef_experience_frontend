import { RatingInterface } from "../rating/rating.interface"
import { UserInterface } from "../user/user.interface"

export interface MealInterface {
  id: string
  name: string
  description: string
  price: number
  image: string
  chef_id: string
  ratings?: RatingInterface[]
  average?: number
  user?: UserInterface
  createdAt?: Date
  updatedAt?: Date
}

import { RatingInterface } from "../rating/rating.interface"

export interface MealInterface {
  id: string
  name: string
  description: string
  price: number
  image: string
  ratings?: RatingInterface[]
  average?: number
  createdAt: Date
  updatedAt: Date
}

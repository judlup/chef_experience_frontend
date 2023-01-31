import { RatingRepositoryInterface } from "../../../Domain/repositories/rating/rating.repository"
import { CreateRatingResponseInterface } from "../../../Domain/responses/rating/createRating.response"
import HttpClient from "../../utilities/http/http"
import { LocalStorage } from "../../utilities/localstorage/localstorage"

export default class RatingRepository implements RatingRepositoryInterface {
  private apiUrl = `${process.env.REACT_APP_API_URL}/ratings`
  localStorage = new LocalStorage()
  token = localStorage.getItem("token") || ""
  constructor(private readonly httpClient: HttpClient) {}

  async createRating(
    userId: string,
    mealId: string,
    rating: number
  ): Promise<CreateRatingResponseInterface> {
    let headers = this.httpClient.defaultHeaders
    headers["Authorization"] = `Bearer ${this.token}`
    const response = await this.httpClient.post(`${this.apiUrl}`, {
      userId,
      mealId,
      rating,
    })
    return response.data
  }
}

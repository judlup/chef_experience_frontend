import { MealInterface } from "../../../Domain/interfaces/meal/meal.interface"
import { MealRepositoryInterface } from "../../../Domain/repositories/meal/meal.repository.interface"
import { AddMealResponseInterface } from "../../../Domain/responses/meal/addMeal.response.interface"
import { deleteMealResponseInterface } from "../../../Domain/responses/meal/deleteMeal.response.interface"
import { GetMealResponseInterface } from "../../../Domain/responses/meal/getMeal.response.interface"
import { GetMealsResponseInterface } from "../../../Domain/responses/meal/getMeals.response.interface"
import { GetMealsByChefResponseInterface } from "../../../Domain/responses/meal/getMealsByChef.response.interface"
import { updateMealResponseInterface } from "../../../Domain/responses/meal/updateMeal.response.interface"
import HttpClient from "../../utilities/http/http"
import { LocalStorage } from "../../utilities/localstorage/localstorage"

export default class MealRepository implements MealRepositoryInterface {
  private apiUrl = `${process.env.REACT_APP_API_URL}/meals`
  localStorage = new LocalStorage()
  token = localStorage.getItem("token") || ""
  constructor(private readonly httpClient: HttpClient) {}
  async getMeals(): Promise<GetMealsResponseInterface> {
    let headers = this.httpClient.defaultHeaders
    headers["Authorization"] = `Bearer ${this.token}`
    const response = await this.httpClient.get(`${this.apiUrl}`)
    return response.data
  }
  async getMeal(id: string): Promise<GetMealResponseInterface> {
    let headers = this.httpClient.defaultHeaders
    headers["Authorization"] = `Bearer ${this.token}`
    const response = await this.httpClient.get(`${this.apiUrl}/${id}`)
    return response.data
  }
  async addMeal(meal: MealInterface): Promise<AddMealResponseInterface> {
    let headers = this.httpClient.defaultHeaders
    headers["Authorization"] = `Bearer ${this.token}`
    const response = await this.httpClient.post(`${this.apiUrl}`, meal)
    return response.data
  }
  async updateMeal(
    id: string,
    meal: MealInterface
  ): Promise<updateMealResponseInterface> {
    let headers = this.httpClient.defaultHeaders
    headers["Authorization"] = `Bearer ${this.token}`
    const response = await this.httpClient.put(`${this.apiUrl}/${id}`, meal)
    return response.data
  }
  async deleteMeal(id: string): Promise<deleteMealResponseInterface> {
    let headers = this.httpClient.defaultHeaders
    headers["Authorization"] = `Bearer ${this.token}`
    const response = await this.httpClient.delete(`${this.apiUrl}/${id}`)
    return response.data
  }
  async getMealsByChef(
    chefId: string
  ): Promise<GetMealsByChefResponseInterface> {
    let headers = this.httpClient.defaultHeaders
    headers["Authorization"] = `Bearer ${this.token}`
    const response = await this.httpClient.get(`${this.apiUrl}/chef/${chefId}`)
    return response.data
  }
}

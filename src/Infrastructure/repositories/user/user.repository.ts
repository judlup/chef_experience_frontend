import { UserRepositoryInterface } from "../../../Domain/repositories/user/user.repository.interface"
import { GetChefsResponseInterface } from "../../../Domain/responses/user/chef/getchefs.response"
import { GetUserResponseInterface } from "../../../Domain/responses/user/getuser.response"
import { LoginResponseInterface } from "../../../Domain/responses/user/login/login.response"
import { RegisterResponseInterface } from "../../../Domain/responses/user/register/register.response"
import HttpClient from "../../utilities/http/http"
import { LocalStorage } from "../../utilities/localstorage/localstorage"
export default class UserRepository implements UserRepositoryInterface {
  private apiUrl = `${process.env.REACT_APP_API_URL}/users`
  localStorage = new LocalStorage()
  token = localStorage.getItem("token") || ""
  constructor(private readonly httpClient: HttpClient) {}
  async login(
    username: string,
    password: string
  ): Promise<LoginResponseInterface> {
    const response = await this.httpClient.post(`${this.apiUrl}/login`, {
      username: username,
      password: password,
    })
    return response.data
  }
  async register(
    username: string,
    password: string,
    role: string
  ): Promise<RegisterResponseInterface> {
    const response = await this.httpClient.post(`${this.apiUrl}`, {
      username: username,
      password: password,
      role: role,
    })
    return response.data
  }

  async getChefs(): Promise<GetChefsResponseInterface> {
    let headers = this.httpClient.defaultHeaders
    headers["Authorization"] = `Bearer ${this.token}`
    const response = await this.httpClient.get(`${this.apiUrl}/chefs`)
    return response.data
  }

  async getUser(id: string): Promise<GetUserResponseInterface> {
    let headers = this.httpClient.defaultHeaders
    headers["Authorization"] = `Bearer ${this.token}`
    const response = await this.httpClient.get(`${this.apiUrl}/${id}`)
    return response.data
  }
}

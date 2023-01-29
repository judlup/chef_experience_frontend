import { UserRepositoryInterface } from "../../../Domain/repositories/user/user.repository.interface"
import { LoginResponseInterface } from "../../../Domain/responses/user/login/login.response"
import HttpClient from "../../utilities/http/http"
export default class UserRepository implements UserRepositoryInterface {
  private apiUrl = `${process.env.REACT_APP_API_URL}/users`
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
}

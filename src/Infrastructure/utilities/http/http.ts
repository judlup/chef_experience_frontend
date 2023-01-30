import axios from "axios"
import { IHttp } from "../../../Domain/utilities/http/IHttp"

export default class HttpClient implements IHttp {
  public defaultHeaders: any = {
    "Content-Type": "application/json",
    Accept: "application/json",
  }

  async get(url: string, headers: any = this.defaultHeaders): Promise<any> {
    return await axios.get(url, {
      headers: headers,
    })
  }

  async post(
    url: string,
    data: any,
    headers = this.defaultHeaders
  ): Promise<any> {
    return await axios.post(url, data, {
      headers: headers,
    })
  }

  async put(
    url: string,
    data: any,
    headers = this.defaultHeaders
  ): Promise<any> {
    return await axios.put(url, data, {
      headers,
    })
  }

  async delete(url: string, headers = this.defaultHeaders): Promise<any> {
    return await axios.delete(url, {
      headers: headers,
    })
  }
}

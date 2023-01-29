import { LocalStorageInterface } from "../../../Domain/utilities/localstorage/localstorage.interface"

export class LocalStorage implements LocalStorageInterface {
  get(key: string): string {
    return localStorage.getItem(key) || ""
  }
  set(key: string, value: string): void {
    localStorage.setItem(key, value)
  }
  remove(key: string): void {
    localStorage.removeItem(key)
  }
}

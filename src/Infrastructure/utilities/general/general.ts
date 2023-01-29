import { LocalStorage } from "../localstorage/localstorage"

export const getTokenFromLocalStorage = () => {
  const localstorage = new LocalStorage()
  const authLocalStorage = JSON.parse(localstorage.get("auth"))
  const token = authLocalStorage.state.token
  return token
}

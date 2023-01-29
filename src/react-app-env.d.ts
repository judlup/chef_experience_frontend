/// <reference types="react-scripts" />
declare module "*.scss"
declare namespace NodeJS {
  interface ProcessEnv {
    readonly REACT_APP_API_URL: string
  }
  interface Window {}
}

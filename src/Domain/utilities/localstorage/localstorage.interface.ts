export interface LocalStorageInterface {
  get(key: string): string
  set(key: string, value: string): void
  remove(key: string): void
}

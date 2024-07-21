import { StoreElement } from "./StoreElement";

export type EntityStore = {
  entities: Array<StoreElement> | []
  isLoading: boolean
  isError: Error | undefined
}
import { DTOElementArray, EntityStore } from "../../../../types";


export const TOGGLE_ENTITY_IS_OPEN = "treeview/entity/TOGGLE_ENTITY_IS_OPEN"
export const TOGGLE_ENTITY_IS_LOADING = "treeview/entity/TOGGLE_ENTITY_IS_LOADING"
export const TOGGLE_ENTITY_IS_ERROR = "treeview/entity/TOGGLE_ENTITY_IS_ERROR"
export const SET_ENTITY_TO_STORE = "treeview/entity/SET_ENTITY_TO_STORE"
export const SET_ENTITY_TO_STORE_FROM_LOCAL_STORAGE = "treeview/entity/SET_ENTITY_TO_STORE_FROM_LOCAL_STORAGE"

export type EntityAction =
  | { type: typeof TOGGLE_ENTITY_IS_OPEN; id: number }
  | { type: typeof SET_ENTITY_TO_STORE; payload: DTOElementArray }
  | { type: typeof SET_ENTITY_TO_STORE_FROM_LOCAL_STORAGE; payload: EntityStore }
  | { type: typeof TOGGLE_ENTITY_IS_LOADING; payload: boolean }
  | { type: typeof TOGGLE_ENTITY_IS_ERROR; payload: Error | undefined }

export const setEntityToStore = (entity: DTOElementArray): EntityAction => ({
  type: SET_ENTITY_TO_STORE,
  payload: entity
})

export const setEntityToStoreFromLocalStorage = (entity: EntityStore): EntityAction => ({
  type: SET_ENTITY_TO_STORE_FROM_LOCAL_STORAGE,
  payload: entity
})

export const toggleEntityIsOpen = (id: number) => ({
  type: TOGGLE_ENTITY_IS_OPEN,
  id: id
})

export const toggleEntityIsLoading = (payload: boolean) => ({
  type: TOGGLE_ENTITY_IS_OPEN,
  payload
})

export const toggleEntityIsError = (payload: Error | undefined) => ({
  type: TOGGLE_ENTITY_IS_OPEN,
  payload
})


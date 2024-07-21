import { EntityDTO } from "../../../../types";

export const TOGGLE_ENTITY_IS_OPEN = "treeview/entity/TOGGLE_ENTITY_IS_OPEN"
export const SET_ENTITY_TO_STORE = "treeview/entity/SET_ENTITY_TO_STORE"

export type EntityAction =
  | { type: typeof TOGGLE_ENTITY_IS_OPEN; id: number }
  | { type: typeof SET_ENTITY_TO_STORE; payload: EntityDTO }

export const setEntityToStore = (entity: EntityDTO): EntityAction => ({
  type: SET_ENTITY_TO_STORE,
  payload: entity
})

export const toggleEntityIsOpen = (id: number) => ({
  type: TOGGLE_ENTITY_IS_OPEN,
  id: id
})


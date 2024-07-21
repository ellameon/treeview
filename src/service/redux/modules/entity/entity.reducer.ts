import { EntityAction, SET_ENTITY_TO_STORE, TOGGLE_ENTITY_IS_OPEN } from "./entity.action";
import { createEntityStoreElement, toggleIsElementOpen } from "../../utils";
import { EntityStore } from "../../../../types";

const initialState: EntityStore = {entities: []}

export const entityReducer = (state = initialState, action: EntityAction): EntityStore => {
  switch (action.type) {
    case SET_ENTITY_TO_STORE: {
      const resultStore = {
        entities: action.payload.map(element => createEntityStoreElement(element))
      }
      localStorage.setItem("currentInterface", JSON.stringify(resultStore))
      return resultStore
    }

    case TOGGLE_ENTITY_IS_OPEN: {
      const resultStore = toggleIsElementOpen(state, action.id)
      localStorage.setItem("currentInterface", JSON.stringify(resultStore))
      return resultStore
    }

    default:
      return state
  }
}
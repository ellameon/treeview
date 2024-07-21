import { EntityAction, SET_ENTITY_TO_STORE, TOGGLE_ENTITY_IS_OPEN } from "./entity.action";
import { createEntityStoreElement, toggleIsElementOpen } from "../../utils";
import { EntityStore } from "../../../../types";

const initialState: EntityStore = {entities: []}

export const entityReducer = (state = initialState, action: EntityAction): EntityStore => {
  switch (action.type) {
    case SET_ENTITY_TO_STORE: {
      return {
        entities: action.payload.map(element => createEntityStoreElement(element))
      }
    }

    case TOGGLE_ENTITY_IS_OPEN: {
      return  toggleIsElementOpen(state, action.id)
    }

    default:
      return state
  }
}
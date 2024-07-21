import {
  EntityAction,
  SET_ENTITY_TO_STORE,
  SET_ENTITY_TO_STORE_FROM_LOCAL_STORAGE,
  TOGGLE_ENTITY_IS_OPEN
} from "./entity.action";
import { createEntityStoreElement, toggleIsElementOpen } from "../../utils";
import { EntityStore } from "../../../../types";

const initialState: EntityStore = {
  entities: [],
  isError: undefined,
  isLoading: true
}

export const entityReducer = (state = initialState, action: EntityAction): EntityStore => {
  switch (action.type) {
    case SET_ENTITY_TO_STORE: {
      const resultStore = {
        ...state,
        entities: action.payload.map(element => createEntityStoreElement(element))
      }
      localStorage.setItem("treeViewElements", JSON.stringify(resultStore))
      return resultStore
    }

    case SET_ENTITY_TO_STORE_FROM_LOCAL_STORAGE: {
      return action.payload
    }

    case TOGGLE_ENTITY_IS_OPEN: {
      const resultStore = toggleIsElementOpen(state, action.id)
      localStorage.setItem("treeViewElements", JSON.stringify(resultStore))
      return resultStore
    }

    case "treeview/entity/TOGGLE_ENTITY_IS_ERROR": {
      return {
        ...state,
        isError: action.payload
      }
    }

    case "treeview/entity/TOGGLE_ENTITY_IS_LOADING": {
      return {
        ...state,
        isLoading: action.payload
      }
    }

    default:
      return state
  }
}
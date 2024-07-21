import { combineReducers, createStore } from "redux";
import { entityReducer } from "./modules/entity/entity.reducer";

export const rootReducer = combineReducers({
  entity: entityReducer,
})

export type AppState = ReturnType<typeof rootReducer>

const store = createStore(rootReducer)

export default store
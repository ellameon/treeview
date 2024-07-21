import { combineReducers } from "redux";
import { entityReducer } from "./modules/entity/entity.reducer";
import { configureStore } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  entity: entityReducer,
})

export type AppState = ReturnType<typeof rootReducer>

const appStore = configureStore({
  reducer: rootReducer
})

export default appStore
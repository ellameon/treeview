import { TypedUseSelectorHook, useSelector as useReduxSelector } from "react-redux";
import { AppState } from "./AppStore";

export const useSelector: TypedUseSelectorHook<AppState> = useReduxSelector;

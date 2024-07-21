import { TypedUseSelectorHook, useSelector as useReduxSelector } from "react-redux";

import { AppState } from "./store";

export const useSelector: TypedUseSelectorHook<AppState> = useReduxSelector;

import rootReducer from "./CombineReducers"
import { createStore  } from "redux"

export const store = createStore(
    rootReducer
)
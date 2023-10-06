import { combineReducers, configureStore } from "@reduxjs/toolkit";
import filmsReducer from "./filmsReducer";
import queryReducer from "./queryReducer";

const routeReducer = combineReducers({
	films: filmsReducer,
	query: queryReducer,
})

export const store = configureStore({
  reducer: routeReducer,
})

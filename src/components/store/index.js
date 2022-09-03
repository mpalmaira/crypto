import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import coinTableReducer from "./coinTable";

const reducers = combineReducers({
  coins: coinTableReducer,
});

export const store = createStore(reducers, applyMiddleware(thunk));

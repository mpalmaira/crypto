import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import coinTableReducer from "./coinTable";
import currencyReducer from "./currency";

const reducers = combineReducers({
  coins: coinTableReducer,
  currency: currencyReducer,
});

export const store = createStore(reducers, applyMiddleware(thunk));

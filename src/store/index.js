import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import coinTableReducer from "./coinTable";
import settingsReducer from "./settings";
import bitcoinReducer from "./bitcoinCharts";
import marketDataReducer from "./marketData";
import coinPageReducer from "./coinPage";

const reducers = combineReducers({
  coins: coinTableReducer,
  settings: settingsReducer,
  bitcoin: bitcoinReducer,
  marketData: marketDataReducer,
  coinPage: coinPageReducer,
});

export const store = createStore(reducers, applyMiddleware(thunk));

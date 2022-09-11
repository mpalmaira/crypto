import { combineReducers, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import coinTableReducer from "./coinTable";
import settingsReducer from "./settings";
import bitcoinReducer from "./bitcoinCharts";
import marketDataReducer from "./marketData";
import coinPageReducer from "./coinPage";
import searchReducer from "./search";
import portfolioReducer from "./portfolio";

const rootReducer = combineReducers({
  coins: coinTableReducer,
  settings: settingsReducer,
  bitcoin: bitcoinReducer,
  marketData: marketDataReducer,
  coinPage: coinPageReducer,
  search: searchReducer,
  portfolio: portfolioReducer,
});
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["settings"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);

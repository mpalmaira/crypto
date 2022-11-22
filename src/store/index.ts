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
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";


const assetsPersistConfig = {
  key: "assets",
  storage: storage,
  whitelist: ["assets"],
};
const rootReducer = combineReducers({
  coins: coinTableReducer,
  settings: settingsReducer,
  bitcoin: bitcoinReducer,
  marketData: marketDataReducer,
  coinPage: coinPageReducer,
  search: searchReducer,
  portfolio: persistReducer(assetsPersistConfig,portfolioReducer),
});
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["settings"],
};
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);

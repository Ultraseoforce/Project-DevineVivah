import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { apiSlice } from "./api";
import authReducer from "./auth/authSlice";
// import utilReducer from "./util/utilSlice";
// import buyerauthReducer from "./auth/buyerSlice";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const rootreducer = combineReducers({
  auth: authReducer,
  // buyerauth: buyerauthReducer,
});

const persistedReducer = persistReducer(persistConfig, rootreducer);

export const store = configureStore({
  reducer: {
    // persistedReducer,
    // [apiSlice.reducerPath]: apiSlice.reducer,
    // util: utilReducer,
    persistedReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    // [emptySplitApi.reducerPath]: emptySplitApi.reducer,
    // util: utilReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(apiSlice.middleware),
});

export const persistor = persistStore(store);

// import { configureStore, createReducer } from "@reduxjs/toolkit";
// import cartReducer from './cartSlice';

 

//  const appStore = configureStore ({
//     reducer : {
//         cart : cartReducer}
//  });


//  export default appStore;

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import cartReducer from './cartSlice';

const rootReducer = combineReducers({
    cart: cartReducer,
    // Add more reducers here if you have them
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer
});

const persistor = persistStore(store); // Create persistor from store

export { store, persistor }; // Export both store and persistor

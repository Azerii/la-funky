import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import authReducer from '../features/auth/authSlice';
import shopReducer from '../features/shop/shopSlice';
import cartReducer from '../features/cart/cartSlice';
import persistStore from 'redux-persist/es/persistStore';

const reducers = combineReducers({
  shop: shopReducer,
  auth: authReducer,
  cart: cartReducer
});

const persistConfig = {
  key: 'la-funky:root',
  storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
});

const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export { store, persistor };

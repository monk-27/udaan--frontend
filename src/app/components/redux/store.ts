import { configureStore, Action, ThunkAction } from '@reduxjs/toolkit';
import rootReducer from './reducers';

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION__: any;
    }
  }

const store = configureStore({
  reducer: rootReducer,
  
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export default store;

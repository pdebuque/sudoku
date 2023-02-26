import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './reducers/game.reducer';
import logger from 'redux-logger';

const store = configureStore({
  reducer: {
    game: gameReducer
  },
  middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
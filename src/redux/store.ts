import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './reducers/game.reducer';
import userReducer from './reducers/user.reducer';
import { puzzleApi } from './reducers/puzzleApi.reducer';
import logger from 'redux-logger';

const store = configureStore({
  reducer: {
    game: gameReducer,
    user: userReducer,
    puzzleApi: puzzleApi.reducer,
  },
  middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(logger, puzzleApi.middleware)
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
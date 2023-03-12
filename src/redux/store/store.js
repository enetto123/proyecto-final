import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/conteo'; 
import cosasReducer from '../features/cosas';
import modalReducer from '../features/modal';


export const store = configureStore({
  reducer: {
    counter:counterReducer,
    cosas: cosasReducer,
    startModal:modalReducer,
  },
});

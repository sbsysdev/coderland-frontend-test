// react
import { configureStore } from '@reduxjs/toolkit';
// modules
import { loaderReducer } from '../loader';

export const mainStore = configureStore({
    reducer: {
        loader: loaderReducer,
    },
});

export type MainState = ReturnType<typeof mainStore.getState>;
export type MainDispatch = typeof mainStore.dispatch;

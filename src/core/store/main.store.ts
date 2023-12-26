// react
import { configureStore } from '@reduxjs/toolkit';
// modules
import { loaderReducer } from '../loader';
import { taskReducer } from '@/modules/public/store';

export const mainStore = configureStore({
    reducer: {
        loader: loaderReducer,
        task: taskReducer,
    },
});

export type MainState = ReturnType<typeof mainStore.getState>;
export type MainDispatch = typeof mainStore.dispatch;

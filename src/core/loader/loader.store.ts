// react
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
// store
import { MainState } from '../store';

interface LoaderState {
    loading: boolean;
}

const initialLoaderState: LoaderState = {
    loading: false,
};

export const loaderSlice = createSlice({
    name: 'loader',
    initialState: initialLoaderState,
    reducers: {
        setLoader: (state, { payload }: PayloadAction<LoaderState>) => {
            state.loading = payload.loading;
        },
    },
});

export const { setLoader } = loaderSlice.actions;

export const selectLoader = (state: MainState) => state.loader;

export const loaderReducer = loaderSlice.reducer;

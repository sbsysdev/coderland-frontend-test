// react
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
// types
import { Color } from '@/shared/types';
// store
import { MainState } from '../store';

interface LoaderState {
    loading: boolean;
    color: Color;
}

const initialLoaderState: LoaderState = {
    loading: false,
    color: 'default',
};

export const loaderSlice = createSlice({
    name: 'loader',
    initialState: initialLoaderState,
    reducers: {
        setLoader: (state, { payload: { loading, color } }: PayloadAction<LoaderState>) => {
            state.loading = loading;
            state.color = color;
        },
    },
});

export const { setLoader } = loaderSlice.actions;

export const selectLoader = (state: MainState) => state.loader;

export const loaderReducer = loaderSlice.reducer;

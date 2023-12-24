// react
import { useCallback } from 'react';
// types
import { Color } from '@/shared/types';
// hooks
import { useMainDispatch, useMainSelector } from '../store';
// store
import { selectLoader, setLoader } from './loader.store';

export const useLoader = () => {
    const { loading, color } = useMainSelector(selectLoader);

    const dispatch = useMainDispatch();

    const showLoader = useCallback(
        (loaderColor: Color = 'info') => dispatch(setLoader({ loading: true, color: loaderColor })),
        [dispatch]
    );

    const hideLoader = useCallback(() => dispatch(setLoader({ loading: false, color: 'default' })), [dispatch]);

    return {
        loading,
        color,
        showLoader,
        hideLoader,
    };
};

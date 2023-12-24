// react
import { useMemo } from 'react';
// hooks
import { useMainDispatch, useMainSelector } from '../store';
// store
import { selectLoader, setLoader } from './loader.store';
import { Color } from '@/shared/types';

export const useLoader = () => {
    const { loading, color } = useMainSelector(selectLoader);

    const dispatch = useMainDispatch();

    const showLoader = useMemo(
        (loaderColor: Color = 'info') => dispatch(setLoader({ loading: true, color: loaderColor })),
        [dispatch]
    );

    const hideLoader = useMemo(() => dispatch(setLoader({ loading: false, color })), [color, dispatch]);

    return {
        loading,
        color,
        showLoader,
        hideLoader,
    };
};

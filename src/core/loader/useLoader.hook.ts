// react
import { useMemo } from 'react';
// hooks
import { useMainDispatch, useMainSelector } from '../store';
// store
import { selectLoader, setLoader } from './loader.store';

export const useLoader = () => {
    const { loading } = useMainSelector(selectLoader);

    const dispatch = useMainDispatch();

    const showLoader = useMemo(() => dispatch(setLoader({ loading: true })), [dispatch]);

    const hideLoader = useMemo(() => dispatch(setLoader({ loading: false })), [dispatch]);

    return {
        loading,
        showLoader,
        hideLoader,
    };
};

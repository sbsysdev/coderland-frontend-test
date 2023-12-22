// react
import { memo } from 'react';
import { createPortal } from 'react-dom';
// types
import { LoaderProviderProps } from './loader.type';
// utils
import { contentParams } from '@/shared/utils';
// hooks
import { useLoader } from './useLoader.hook';

const LoaderProvider = memo(({ children }: LoaderProviderProps) => {
    const { loading } = useLoader();

    if (!loading) return null;

    return createPortal(
        <div className="">
            <div className="" />

            <span className="">{contentParams(children, {})}</span>
        </div>,
        document.getElementById('loader')!
    );
});

export default LoaderProvider;

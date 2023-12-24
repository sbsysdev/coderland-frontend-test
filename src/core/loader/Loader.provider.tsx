// react
import { memo } from 'react';
import { createPortal } from 'react-dom';
// types
import { LoaderProviderProps } from './loader.type';
// utils
import { contentParams } from '@/shared/utils';
// hooks
import { useLoader } from './useLoader.hook';
// styles
import styles from './loader.module.scss';

const LoaderProvider = memo(({ children }: LoaderProviderProps) => {
    const { loading, color } = useLoader();

    if (!loading) return null;

    return createPortal(
        <div className={styles.wrapper}>
            <span className={styles.content}>{contentParams(children, { color })}</span>
        </div>,
        document.getElementById('loader')!
    );
});

export default LoaderProvider;

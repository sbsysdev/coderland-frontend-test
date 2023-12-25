// react
import { memo } from 'react';
// types
import { LoaderProviderProps } from './loader.type';
// utils
import { contentParams } from '@/shared/utils';
// hooks
import { useLoader } from './useLoader.hook';
// styles
import styles from './loader.module.scss';
import { ModalLayout } from '@/shared/layouts';

const LoaderProvider = memo(({ children }: LoaderProviderProps) => {
    const { loading, color } = useLoader();

    return (
        <ModalLayout className={styles.wrapper} isOpen={loading} targetId="loader">
            <span className={styles.content}>{contentParams(children, { color })}</span>
        </ModalLayout>
    );
});

export default LoaderProvider;

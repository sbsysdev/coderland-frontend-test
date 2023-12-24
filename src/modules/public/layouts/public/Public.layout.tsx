// react
import { memo } from 'react';
import { Outlet } from 'react-router-dom';
// styles
import styles from './public.module.scss';

const PublicLayout = memo(() => {
    return (
        <div className={styles.wrapper}>
            <header>
                <h1>
                    coder<span>land</span>
                </h1>
            </header>

            <div className={styles.content}>
                <Outlet />
            </div>

            <footer>
                <a href="https://github.com/sbsysdev/coderland-frontend-test" target="_blank" rel="noopener noreferrer">
                    © Steven Joseph Bustillo López
                </a>
            </footer>
        </div>
    );
});

export default PublicLayout;

// react
import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
// styles
import styles from './home.module.scss';
import { Button } from '@/shared/components';

const HomeView = memo(() => {
    const navigate = useNavigate();

    const navigateToTasks = useCallback(() => navigate('/tasks'), [navigate]);
    const navigateToList = useCallback(() => navigate('/list'), [navigate]);

    return (
        <main className={styles.wrapper}>
            <Button color="primary" variant="fill" onClick={navigateToTasks}>
                <span>Tasks</span>
            </Button>

            <Button color="secondary" variant="fill" onClick={navigateToList}>
                <span>List</span>
            </Button>
        </main>
    );
});

export default HomeView;

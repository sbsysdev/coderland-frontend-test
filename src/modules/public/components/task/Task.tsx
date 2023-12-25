// react
import { memo } from 'react';
// types
import { TaskProps } from './task.type';
// utils
import { classNames } from '@/shared/utils';
// components
import { Button, Icon } from '@/shared/components';
// assets
import { mdiDelete, mdiEye, mdiPencil } from '@mdi/js';
// styles
import styles from './task.module.scss';

const Task = memo(({ className, task, ...rest }: TaskProps) => {
    return (
        <div className={classNames(styles.wrapper, className)} {...rest}>
            <section className={styles.content}>
                <h3>{task.title}</h3>

                <p>{task.description}</p>

                <span>{task.createdAt.toLocaleString()}</span>
            </section>

            <section className={styles.actions}>
                <Button color="primary">
                    <Icon path={mdiEye} isUnstyled />
                </Button>

                <Button color="primary">
                    <Icon path={mdiPencil} isUnstyled />
                </Button>

                <Button color="danger">
                    <Icon path={mdiDelete} isUnstyled />
                </Button>
            </section>
        </div>
    );
});

export default Task;

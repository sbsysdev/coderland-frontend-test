// react
import { Fragment, memo } from 'react';
// hooks
import { useTasks } from './useTasks.hook';
// layouts
import { ModalLayout } from '@/shared/layouts';
// components
import { Button, Icon } from '@/shared/components';
import { NewTask, Task } from '../../components';
// assets
import { mdiAccountFile, mdiFilePlus } from '@mdi/js';
// styles
import styles from './task.module.scss';

const TaskView = memo(() => {
    const { isAddNewTaskOpen, openAddNewTaskOpen, closeAddNewTaskOpen } = useTasks();

    return (
        <main className={styles.wrapper}>
            {false && (
                <section className={styles['no-task-list']}>
                    <p>Looks like you don't have added any task yet</p>

                    <Icon path={mdiAccountFile} />

                    <Button color="primary" variant="fill" onClick={openAddNewTaskOpen}>
                        <span>Add your first task</span>

                        <Icon path={mdiFilePlus} isUnstyled />
                    </Button>
                </section>
            )}

            <section className={styles['task-list']}>
                <header>
                    <h2>Your task list</h2>

                    <Button color="primary" variant="fill" onClick={openAddNewTaskOpen}>
                        <span>Add new task</span>

                        <Icon path={mdiFilePlus} isUnstyled />
                    </Button>
                </header>

                <div className={styles.list}>
                    {[...Array(50)].map((_, index) => (
                        <Fragment key={index}>
                            <Task
                                task={{
                                    id: index,
                                    title: 'Task title',
                                    description:
                                        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut odit soluta aliquam architecto rerum iure deleniti impedit perferendis illo explicabo?',
                                    createdAt: new Date(),
                                }}
                            />
                        </Fragment>
                    ))}
                </div>
            </section>

            <ModalLayout isOpen={isAddNewTaskOpen}>
                <NewTask onCancel={closeAddNewTaskOpen} />
            </ModalLayout>
        </main>
    );
});

export default TaskView;

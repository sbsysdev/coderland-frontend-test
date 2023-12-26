// react
import { memo } from 'react';
// types
import { NewTaskProps } from './new-task.type';
// components
import { Button, Field, Icon } from '@/shared/components';
// hooks
import { useNewTask } from './useNewTask.hook';
// assets
import { mdiCloseCircle, mdiContentSave } from '@mdi/js';
// styles
import styles from './new-task.module.scss';

const NewTask = memo(({ onCancel }: NewTaskProps) => {
    const { handleSubmitNewTask, register, errors, isValid, isSubmitted } = useNewTask(onCancel);

    return (
        <form className={styles.wrapper} onSubmit={handleSubmitNewTask}>
            <h3>New task</h3>

            <fieldset>
                <Field
                    htmlFor="title"
                    title="Title"
                    color="primary"
                    variant="underline"
                    isHintReserved
                    hasError={!!errors.title}
                    hint={errors.title?.message}>
                    {/* eslint-disable-next-line jsx-a11y/no-autofocus */}
                    <input id="title" type="text" placeholder="Type task title..." autoFocus {...register('title')} />
                </Field>

                <Field
                    htmlFor="description"
                    title="Description"
                    color="primary"
                    variant="underline"
                    isHintReserved
                    hasError={!!errors.description}
                    hint={errors.description?.message}>
                    <textarea
                        id="description"
                        rows={4}
                        placeholder="Type task description..."
                        {...register('description')}></textarea>
                </Field>
            </fieldset>

            <div className={styles.actions}>
                <Button type="button" onClick={onCancel}>
                    <span>Cancel</span>

                    <Icon path={mdiCloseCircle} isUnstyled />
                </Button>

                <Button type="submit" color="primary" variant="fill" hasError={!isValid && isSubmitted}>
                    <span>Add task</span>

                    <Icon path={mdiContentSave} isUnstyled />
                </Button>
            </div>
        </form>
    );
});

export default NewTask;

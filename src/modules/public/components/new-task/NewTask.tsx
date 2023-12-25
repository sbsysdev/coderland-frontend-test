// react
import { memo } from 'react';
// types
import { NewTaskProps } from './new-task.type';
// components
import { Button, Field, Icon } from '@/shared/components';
// assets
import { mdiCloseCircle, mdiContentSave } from '@mdi/js';
// styles
import styles from './new-task.module.scss';

const NewTask = memo(({ onCancel }: NewTaskProps) => {
    return (
        <form className={styles.wrapper} onSubmit={event => event.preventDefault()}>
            <h3>New task</h3>

            <fieldset>
                <Field title="Title" color="primary" variant="underline" isHintReserved>
                    {/* eslint-disable-next-line jsx-a11y/no-autofocus */}
                    <input name="title" id="title" type="text" placeholder="Type task title..." autoFocus />
                </Field>

                <Field title="Description" color="primary" variant="underline" isHintReserved>
                    <textarea
                        name="description"
                        id="description"
                        rows={4}
                        placeholder="Type task description..."></textarea>
                </Field>
            </fieldset>

            <div className={styles.actions}>
                <Button type="button" onClick={onCancel}>
                    <span>Cancel</span>

                    <Icon path={mdiCloseCircle} isUnstyled />
                </Button>

                <Button type="submit" color="primary" variant="fill">
                    <span>Add task</span>

                    <Icon path={mdiContentSave} isUnstyled />
                </Button>
            </div>
        </form>
    );
});

export default NewTask;

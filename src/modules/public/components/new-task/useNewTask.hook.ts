// react
import { useForm } from 'react-hook-form';
// store
import { addTask } from '../../store';
// hooks
import { useMainDispatch } from '@/core/store';
// types
import { NewTaskFormData, newTaskValidation } from './new-task.type';
import { TaskItem } from '../../types';
// utils
import { zodResolver } from '@hookform/resolvers/zod';

export const useNewTask = (cb: () => void) => {
    const {
        handleSubmit,
        register,
        formState: { errors, isValid, isSubmitted },
    } = useForm<NewTaskFormData>({
        mode: 'all',
        resolver: zodResolver(newTaskValidation),
    });

    const dispatch = useMainDispatch();

    const handleSubmitNewTask = handleSubmit(data => {
        const newTask: TaskItem = {
            id: Date.now(),
            title: data.title,
            description: data.description,
            createdAt: new Date().toISOString(),
        };

        dispatch(addTask(newTask));

        cb();
    });

    return { handleSubmitNewTask, register, errors, isValid, isSubmitted };
};

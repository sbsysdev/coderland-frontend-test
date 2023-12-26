// store
import { selectTask } from '../../store';
// hooks
import { useMainSelector } from '@/core/store';
import { useActive } from '@/shared/hooks';

export const useTasks = () => {
    const [isAddNewTaskOpen, openAddNewTaskOpen, closeAddNewTaskOpen] = useActive();

    const { taskList } = useMainSelector(selectTask);

    return {
        isAddNewTaskOpen,
        openAddNewTaskOpen,
        closeAddNewTaskOpen,
        taskList,
    };
};

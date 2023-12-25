// hooks
import { useActive } from '@/shared/hooks';

export const useTasks = () => {
    const [isAddNewTaskOpen, openAddNewTaskOpen, closeAddNewTaskOpen] = useActive();

    return {
        isAddNewTaskOpen,
        openAddNewTaskOpen,
        closeAddNewTaskOpen,
    };
};

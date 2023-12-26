// react
import { z } from 'zod';

export interface NewTaskProps {
    onCancel: () => void;
}

export interface NewTaskFormData {
    title: string;
    description: string;
}

export const newTaskValidation = z.object({
    title: z.string().min(1, 'task title is required'),
    description: z
        .string()
        .min(1, 'task description is required')
        .max(250, 'maximum length of the description has been exceeded, max: 250'),
});

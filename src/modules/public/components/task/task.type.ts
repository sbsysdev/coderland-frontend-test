// react
import { DetailedHTMLProps, HTMLAttributes } from 'react';
// types
import { TaskItem } from '../../types';

export interface TaskProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    task: TaskItem;
}

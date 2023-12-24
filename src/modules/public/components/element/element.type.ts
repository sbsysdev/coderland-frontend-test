// react
import { DetailedHTMLProps, HTMLAttributes } from 'react';
// types
import { ElementListItem } from '../../types';

export interface ElementProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    element: ElementListItem;
}

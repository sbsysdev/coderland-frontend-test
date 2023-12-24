//
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
// types
import { Color, Slot, TextSlot, Variant } from '@/shared/types';

export interface ButtonParams {
    hasError: boolean;

    color: Color;
    variant: Variant;
}

export interface ButtonProps
    extends Omit<
        DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
        'className' | 'children' | 'ref'
    > {
    className?: TextSlot<ButtonParams>;
    hasError?: boolean;

    children?: Slot<ButtonParams>;

    color?: Color;
    variant?: Variant;
}

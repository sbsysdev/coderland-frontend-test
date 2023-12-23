// types
import { Color, Slot, TextSlot, Variant } from '@/shared/types';

export interface ButtonParams {
    className: string;
    hasError: boolean;

    color: Color;
    variant: Variant;
}

export interface ButtonProps {
    className?: TextSlot<ButtonParams>;
    hasError?: boolean;

    children?: Slot<ButtonParams>;

    color?: Color;
    variant?: Variant;
}

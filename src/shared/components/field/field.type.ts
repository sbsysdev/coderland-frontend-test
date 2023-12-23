// types
import { Color, Slot, TextSlot, Variant } from '@/shared/types';

export interface FieldParams {
    className: string;
    isHintReserved: boolean;
    hasError: boolean;

    color: Color;
    variant: Variant;
}

export interface FieldProps {
    className?: {
        wrapper?: TextSlot<FieldParams>;
        content?: TextSlot<FieldParams>;
    };
    htmlFor?: string;
    isHintReserved?: boolean;
    hasError?: boolean;

    title?: string;
    hint?: string;

    header?: Slot<FieldParams>;
    before?: Slot<FieldParams>;
    children?: Slot<FieldParams>;
    after?: Slot<FieldParams>;
    footer?: Slot<FieldParams>;

    color?: Color;
    variant?: Variant;
}

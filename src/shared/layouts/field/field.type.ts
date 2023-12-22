// types
import { Color, Size, Slot, TextSlot, Variant } from '@/shared/types';

export interface FieldLayoutParams {
    className: string;
    isHintReserved: boolean;
    hasError: boolean;

    color: Color;
    variant: Variant;
    size: Size;
}

export interface FieldLayoutProps {
    className?: {
        wrapper?: TextSlot<FieldLayoutParams>;
        content?: TextSlot<FieldLayoutParams>;
    };
    htmlFor?: string;
    isHintReserved?: boolean;
    hasError?: boolean;

    title?: string;
    hint?: string;

    header?: Slot<FieldLayoutParams>;
    before?: Slot<FieldLayoutParams>;
    children?: Slot<FieldLayoutParams>;
    after?: Slot<FieldLayoutParams>;
    footer?: Slot<FieldLayoutParams>;

    color?: Color;
    variant?: Variant;
    size?: Size;
}

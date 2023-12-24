// types
import { Color, Slot, TextSlot } from '@/shared/types';

export interface LoaderParams {
    color: Color;
}

export interface LoaderProviderProps {
    children: Slot<LoaderParams>;
}

export interface LoaderProps {
    className?: TextSlot<LoaderParams>;
    color?: Color;
}

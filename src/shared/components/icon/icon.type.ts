// react
import { SVGProps } from 'react';
// types
import { Color, Slot, TextSlot } from '@/shared/types';

export interface IconParams {
    hasError: boolean;
    color: Color;
    isUnstyled: boolean;
}

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'className' | 'ref' | 'children'> {
    className?: TextSlot<IconParams>;
    hasError?: boolean;
    color?: Color;
    isUnstyled?: boolean;
    children?: Slot<IconParams>;
}

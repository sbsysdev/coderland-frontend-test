// react
import { SVGProps } from 'react';
// types
import { Color } from '@/shared/types';

export interface IconParams {
    hasError: boolean;
    color: Color;
}

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'ref'> {
    hasError?: boolean;
    color?: Color;
    isUnstyled?: boolean;
}

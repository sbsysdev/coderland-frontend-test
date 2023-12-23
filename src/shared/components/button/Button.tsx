// react
import { memo, useMemo } from 'react';
// types
import { Color, Variant } from '@/shared/types';
import { ButtonParams, ButtonProps } from './button.type';
// utils
import { classNames, contentParams, textContentParams } from '@/shared/utils';
// styles
import styles from './button.module.scss';

// color
const COLOR: Record<Color, string> = {
    default: styles.default,
    primary: styles.primary,
    secondary: styles.secondary,
    tertiary: styles.tertiary,
    info: styles.info,
    success: styles.success,
    warning: styles.warning,
    danger: styles.danger,
};
// variant
const VARIANT: Record<Variant, string> = {
    fill: styles.fill,
    outline: styles.outline,
    underline: styles.underline,
    text: styles.text,
};

const FieldLayout = memo(
    ({
        className,
        hasError = false,

        children,

        color = 'default',
        variant = 'text',
    }: ButtonProps) => {
        const params: ButtonParams = useMemo(
            () => ({
                className: '',
                hasError,

                color,
                variant,
            }),
            [color, hasError, variant]
        );

        return <button></button>;
    }
);

export default FieldLayout;

// react
import { memo, useMemo } from 'react';
// types
import { Color, Variant } from '@/shared/types';
import { FieldParams, FieldProps } from './field.type';
// utils
import { classNames, contentParams, textContentParams } from '@/shared/utils';
// styles
import styles from './field.module.scss';

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

const Field = memo(
    ({
        className,
        htmlFor,
        isHintReserved = false,
        hasError = false,

        title,
        hint,

        header,
        before,
        children,
        after,
        footer,

        color = 'default',
        variant = 'text',
    }: FieldProps) => {
        const params: FieldParams = useMemo(
            () => ({
                className: '',
                isHintReserved,
                hasError,

                color,
                variant,
            }),
            [color, hasError, isHintReserved, variant]
        );

        return (
            <span
                className={classNames(
                    styles.wrapper,
                    hasError ? COLOR.danger : COLOR[color],
                    VARIANT[variant],
                    textContentParams(className?.wrapper, params)
                )}>
                {contentParams(header, { ...params, className: styles.title }) ??
                    (title && (
                        <label htmlFor={htmlFor} className={styles.title}>
                            {title}
                        </label>
                    ))}

                <span className={classNames(styles.content, textContentParams(className?.content, params))}>
                    {contentParams(before, params)}

                    {contentParams(children, params)}

                    {contentParams(after, params)}
                </span>

                {contentParams(footer, {
                    ...params,
                    className: classNames(styles.hint, !hint && isHintReserved && styles.reserved),
                }) ??
                    ((hint || isHintReserved) && (
                        <label
                            htmlFor={htmlFor}
                            className={classNames(styles.hint, !hint && isHintReserved && styles.reserved)}>
                            {hint || 'reserved'}
                        </label>
                    ))}
            </span>
        );
    }
);

export default Field;

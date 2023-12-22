// react
import { memo, useMemo } from 'react';
// types
import { FieldLayoutParams, FieldLayoutProps } from './field.type';
// utils
import { classNames, contentParams, textContentParams } from '@/shared/utils';
// styles
import styles from './field.module.scss';

const FieldLayout = memo(
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
        variant = 'fill',
        size = 'md',
    }: FieldLayoutProps) => {
        const params: FieldLayoutParams = useMemo(
            () => ({
                className: '',
                isHintReserved,
                hasError,

                color,
                variant,
                size,
            }),
            [color, hasError, isHintReserved, size, variant]
        );

        return (
            <span
                className={classNames(
                    styles.wrapper,
                    textContentParams(className?.wrapper, { ...params, className: styles.wrapper })
                )}>
                {contentParams(header, { ...params, className: styles.title }) ??
                    (title && (
                        <label htmlFor={htmlFor} className={styles.title}>
                            {title}
                        </label>
                    ))}

                <span className={styles.content}>
                    {contentParams(before, params)}

                    {contentParams(children, params)}

                    {contentParams(after, params)}
                </span>

                {contentParams(footer, {
                    ...params,
                    className: classNames(styles.hint, isHintReserved && styles.reserved),
                }) ??
                    ((hint || isHintReserved) && (
                        <label htmlFor={htmlFor} className={classNames(styles.hint, isHintReserved && styles.reserved)}>
                            {hint || 'reserved'}
                        </label>
                    ))}
            </span>
        );
    }
);

export default FieldLayout;

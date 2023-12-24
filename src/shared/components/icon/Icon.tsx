// react
import { forwardRef, memo, useMemo } from 'react';
// props
import { IconParams, IconProps } from './icon.type';
// types
import { Color } from '@/shared/types';
// utils
import { classNames, contentParams, textContentParams } from '@/shared/utils';
// styles
import styles from './icon.module.scss';

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

const Icon = memo(
    forwardRef<SVGSVGElement, IconProps>(
        ({ className, path, hasError = false, color = 'default', isUnstyled = false, children, ...rest }, ref) => {
            const params: IconParams = useMemo(
                () => ({
                    hasError,

                    color,
                    isUnstyled,
                }),
                [color, hasError, isUnstyled]
            );

            return (
                <svg
                    viewBox="0 0 24 24"
                    className={classNames(
                        styles.wrapper,
                        hasError ? COLOR.danger : COLOR[color],
                        isUnstyled && styles.unstyled,
                        textContentParams(className, params)
                    )}
                    ref={ref}
                    {...rest}>
                    {path && <path fill="currentColor" d={path} />}

                    {contentParams(children, params)}
                </svg>
            );
        }
    )
);

export default Icon;

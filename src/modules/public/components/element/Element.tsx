// react
import { memo } from 'react';
// types
import { ElementProps } from './element.type';
// utils
import { classNames } from '@/shared/utils';
// components
import { Icon } from '@/shared/components';
// assets
import { mdiAccountCircle } from '@mdi/js';
// styles
import styles from './element.module.scss';

const Element = memo(({ className, element, ...rest }: ElementProps) => {
    return (
        <div className={classNames(styles.wrapper, className)} {...rest}>
            <Icon className={styles.icon} path={mdiAccountCircle} color="secondary" />

            <section className={styles.content}>
                <p>{element.name}</p>

                <span>{element.createdAt.toLocaleString()}</span>
            </section>
        </div>
    );
});

export default Element;

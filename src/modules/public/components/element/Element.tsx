// react
import { memo } from 'react';
// types
import { ElementProps } from './element.type';
// utils
import { classNames } from '@/shared/utils';
// styles
import styles from './element.module.scss';

const Element = memo(({ className, element, ...rest }: ElementProps) => {
    return (
        <div className={classNames(styles.wrapper, className)} {...rest}>
            <img src={element.avatar} alt={element.name} />

            <section>
                <p>{element.name}</p>

                <span>{element.createdAt.toISOString()}</span>
            </section>
        </div>
    );
});

export default Element;

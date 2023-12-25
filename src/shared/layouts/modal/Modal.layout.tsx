// react
import { memo } from 'react';
import { createPortal } from 'react-dom';
// types
import { ModalLayoutProps } from './modal.type';
// utils
import { classNames, content, textContent } from '@/shared/utils';
// styles
import styles from './modal.module.scss';

const ModalLayout = memo(({ className, targetId = 'modal', isOpen, children }: ModalLayoutProps) => {
    if (!isOpen) return null;

    return createPortal(
        <div className={classNames(styles.wrapper, textContent(className))}>{content(children)}</div>,
        document.getElementById(targetId)!
    );
});

export default ModalLayout;

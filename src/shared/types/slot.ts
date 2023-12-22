// react
import { ReactNode } from 'react';

export type Slot<T = undefined> = T extends object
    ? ReactNode | ReactNode[] | ((params: T) => ReactNode) | undefined
    : ReactNode | ReactNode[] | (() => ReactNode) | undefined;

export type TextSlot<T = undefined> = T extends object
    ? string | ((params: T) => string) | undefined
    : string | (() => string) | undefined;

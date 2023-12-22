// react
import { ReactNode } from 'react';
// types
import { Slot, TextSlot } from '../types';

export const content = <T extends undefined>(component: Slot<T>) =>
    typeof component === 'function' ? component() : (component as ReactNode | ReactNode[] | undefined);

export const contentParams = <T extends object>(component: Slot<T>, params: T) =>
    typeof component === 'function' ? component(params) : (component as ReactNode | ReactNode[] | undefined);

export const textContent = <T extends undefined>(str: TextSlot<T>) =>
    typeof str === 'function' ? str() : (str as string | undefined);

export const textContentParams = <T extends object>(str: TextSlot<T>, params: T) =>
    typeof str === 'function' ? str(params) : (str as string | undefined);

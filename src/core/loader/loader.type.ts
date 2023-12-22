// types
import { Slot } from '@/shared/types';

export interface LoaderParams {}

export interface LoaderProviderProps {
    children: Slot<LoaderParams>;
}

// react
import { EnhancedStore } from '@reduxjs/toolkit';
// types
import { Slot } from '@/shared/types';

export interface StoreProviderProps {
    store: EnhancedStore;
    children: Slot;
}

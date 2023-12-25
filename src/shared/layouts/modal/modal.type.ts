// types
import { Slot, TextSlot } from '@/shared/types';

export interface ModalLayoutProps {
    className?: TextSlot;
    targetId?: string;
    isOpen?: boolean;
    children?: Slot;
}

// react
import { Slot } from '@/shared/types';
import { mainRoutes } from './main.routes';

export interface RouteParams {
    path: string;
    active: boolean;
}

export interface RoutesProviderProps {
    routes: typeof mainRoutes;
    children: Slot<RouteParams>;
}

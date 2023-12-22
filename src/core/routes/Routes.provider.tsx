// react
import { Suspense, memo } from 'react';
import { RouterProvider } from 'react-router-dom';
// types
import { RoutesProviderProps } from './routes.type';
// utils
import { contentParams } from '@/shared/utils';

const RoutesProvider = memo(({ routes, children }: RoutesProviderProps) => {
    return (
        <Suspense fallback={contentParams(children, { path: '', active: true })}>
            <RouterProvider router={routes} />
        </Suspense>
    );
});

export default RoutesProvider;

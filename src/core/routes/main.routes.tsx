// react
import { createBrowserRouter } from 'react-router-dom';
// components
import Root from './Root';
import NotFound from './NotFound';
// routes
import { publicRoutes } from '@/modules/public';

export const mainRoutes = createBrowserRouter(
    [
        {
            path: '',
            element: <Root />,
            errorElement: <NotFound />,
            children: [publicRoutes],
        },
    ],
    {
        basename: '/coderland-frontend-test',
    }
);

// react
import { createBrowserRouter } from 'react-router-dom';
// components
import Root from './Root';
import NotFound from './NotFound';
// routes

export const mainRoutes = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <NotFound />,
        children: [],
    },
]);

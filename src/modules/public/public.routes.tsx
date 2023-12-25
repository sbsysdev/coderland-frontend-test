// react
import { RouteObject } from 'react-router-dom';
// layouts
import { PublicLayout } from './layouts';
// views
import { HomeView, ListView, TaskView } from './views';

export const publicRoutes: RouteObject = {
    path: '/',
    element: <PublicLayout />,
    children: [
        {
            index: true,
            element: <HomeView />,
        },
        {
            path: 'list',
            element: <ListView />,
        },
        {
            path: 'tasks',
            element: <TaskView />,
        },
    ],
};

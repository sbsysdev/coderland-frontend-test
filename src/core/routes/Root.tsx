// react
import { memo } from 'react';
import { Outlet } from 'react-router-dom';

const Root = memo(() => {
    return <Outlet />;
});

export default Root;

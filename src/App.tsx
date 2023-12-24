// react
import { memo } from 'react';
// providers
import { StoreProvider, mainStore } from '@/core/store';
import { Fallback, RoutesProvider, mainRoutes } from '@/core/routes';
import { Loader, LoaderProvider } from '@/core/loader';

const App = memo(() => {
    return (
        <StoreProvider store={mainStore}>
            <RoutesProvider routes={mainRoutes}>
                <Fallback />
            </RoutesProvider>

            <LoaderProvider>{({ color }) => <Loader color={color} />}</LoaderProvider>
        </StoreProvider>
    );
});

export default App;

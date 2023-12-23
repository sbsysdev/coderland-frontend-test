// react
import { memo } from 'react';
// providers
import { StoreProvider, mainStore } from '@/core/store';
import { Fallback, RoutesProvider, mainRoutes } from '@/core/routes';
import { Loader, LoaderProvider } from '@/core/loader';
import { Field } from './shared/components';

const App = memo(() => {
    return (
        <StoreProvider store={mainStore}>
            <RoutesProvider routes={mainRoutes}>{() => <Fallback />}</RoutesProvider>

            <LoaderProvider>{() => <Loader />}</LoaderProvider>

            <Field hint="please type your user name" title="User name" color="primary" variant="outline">
                <input type="text" placeholder="Type your user name..." />
            </Field>
        </StoreProvider>
    );
});

export default App;

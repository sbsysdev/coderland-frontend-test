// react
import { memo } from 'react';
import { Provider } from 'react-redux';
// types
import { StoreProviderProps } from './store.type';
// utils
import { content } from '@/shared/utils';

const StoreProvider = memo(({ store, children }: StoreProviderProps) => {
    return <Provider store={store}>{content(children)}</Provider>;
});

export default StoreProvider;

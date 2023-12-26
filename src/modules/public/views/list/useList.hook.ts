// react
import { useCallback, useEffect, useState } from 'react';
// types
import { ElementListItem } from '../../types';
// hooks
import { useLoader } from '@/core/loader';
// repositories
import { getElementListRepository } from '../../repositories';

export const useList = () => {
    const { loading, showLoader, hideLoader } = useLoader();

    const [elementList, setElementList] = useState<ElementListItem[]>([]);

    // actions
    const getElementList = useCallback(async () => {
        showLoader('secondary');

        const result = await getElementListRepository();

        hideLoader();

        if (!result.success) {
            console.log(result.message);

            return;
        }

        setElementList(result.data);
    }, [hideLoader, showLoader]);

    // reactivity
    useEffect(() => {
        getElementList();
    }, [getElementList]);

    return { loading, elementList };
};

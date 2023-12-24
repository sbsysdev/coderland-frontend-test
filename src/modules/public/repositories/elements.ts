// types
import { RequestResponse, responseError, responseSuccess } from '@/shared/types';
import { ElementListItem } from '../types';
// constants
import { mockAPI } from '../constants';
// utils
import { request } from '@/shared/utils';

// export interface ElementListReq {}

export const getElementListRepository = async (/* req?: ElementListReq */): Promise<
    RequestResponse<ElementListItem[]>
> =>
    await request({
        instance: mockAPI,
        path: '/elements',
        serializer: async data => {
            return responseSuccess(
                (data as Array<ElementListItem>).map(item => ({
                    ...item,
                    id: Number(item.id),
                    createdAt: new Date(item.createdAt),
                })),
                'info'
            );
        },
        errorSerializer: async error => {
            if (!error.response) {
                return responseError(error.message);
            }

            return responseError(JSON.stringify(error.response.data), 'warning');
        },
    });

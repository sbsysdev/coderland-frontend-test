// types
import { RequestResponse } from '../types';
// utils
import { AxiosError, AxiosInstance, AxiosResponseHeaders, RawAxiosResponseHeaders } from 'axios';
// services

type RequestMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

interface RequestHeaders {
    [x: string]: string | number | boolean;
}

interface RequestProps<BODY, PARAMS, RES> {
    // request to
    instance: AxiosInstance;
    method?: RequestMethod;
    path: string;
    // common headers
    token?: string;
    lang?: string;
    // transport data
    headers?: RequestHeaders;
    params?: PARAMS;
    body?: BODY;
    // response
    serializer: (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        data: any,
        headers: RawAxiosResponseHeaders | AxiosResponseHeaders,
        status?: number
    ) => Promise<RequestResponse<RES>>;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    errorSerializer: (error: AxiosError<any>) => Promise<RequestResponse<RES>>;
    // configuration
    abort?: AbortController;
    timeout?: number;
}

export const request = async <RES, BODY = undefined, PARAMS = undefined>({
    // request to
    instance,
    method = 'GET',
    path,
    // common headers
    token,
    lang,
    // transport data
    headers,
    params,
    body,
    // response
    serializer,
    errorSerializer,
    // configuration
    abort,
    timeout = 5 * 1000,
}: RequestProps<BODY, PARAMS, RES>): Promise<RequestResponse<RES>> => {
    try {
        const requestHeaders = {
            // base headers
            'Content-Type': 'application/json',
            ...(lang && { 'Accept-Language': lang }),
            // authorization
            ...(token && { Authorization: `Bearer ${token}` }),
            // othes
            ...headers,
        };

        const response = await instance.request({
            headers: requestHeaders,
            method,
            url: path,
            params,
            data: body,
            signal: abort?.signal,
            timeout,
        });
        return serializer(response.data, response.headers, response.status);
    } catch (error) {
        return errorSerializer(error as AxiosError);
    }
};

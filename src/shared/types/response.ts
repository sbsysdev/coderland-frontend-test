import { Color } from './styles';

type Response<T extends boolean> = {
    success: T;
    color: Color;
};

interface ResponseSucess<T> extends Response<true> {
    data: T;
}

export const domainSuccess = <T = undefined>(data: T, color: Color = 'success'): ResponseSucess<T> => ({
    success: true,
    color,
    data,
});

interface ResponseError extends Response<false> {
    message: string;
}

export const domainError = (message: string, color: Color = 'danger'): ResponseError => ({
    success: false,
    color: color,
    message,
});

export type RequestResponse<T = undefined> = ResponseSucess<T> | ResponseError;

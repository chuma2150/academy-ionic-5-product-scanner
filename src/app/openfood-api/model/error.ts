import * as models from './models';

export interface ErrorBody {
    status?: number;
    type?: string;
    message?: string;
    meta?: models.Meta;
}

export interface Error {
    _body?: any;
    status?: number;
    statusText?: string;
    ok?: boolean;
    type?: number;
    headers?: any;
}

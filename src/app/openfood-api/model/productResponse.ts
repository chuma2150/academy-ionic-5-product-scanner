import * as models from './models';

export interface ProductResponse {
    data?: Array<models.Product>;

    links?: Array<any>;

    meta?: models.Meta;

}

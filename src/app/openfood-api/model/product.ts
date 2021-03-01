import * as models from './models';

export interface Map<T> {
    [K: string]: T;
}

export interface Product {
       /**
     * Product ID
     */
    id?: number;

    barcode?: string;

    name_translations?: models.Translation;

    display_name_translations?: models.Translation;

    ingredients_translations?: models.Translation;

    origin_translations?: models.Translation;

    status?: string;

    quantitiy?: number;

    unit?: string;

    portion_quantitiy?: number;

    portion_unit?: string;

    alcohol_by_volume?: number;

    images?: Array<models.Image>;

    nutrients?: Map<models.Nutrient>;

    created_at?: Date;

    updated_at?: Date;

    links?: any;

    meta?: models.Meta;
}

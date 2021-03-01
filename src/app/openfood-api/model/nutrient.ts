import * as models from './models';

export interface Nutrient {

    name_translations: models.Translation;

    unit?: string;

    per_hundred?: number;

    per_portion?: number;

    per_day?: number;
}

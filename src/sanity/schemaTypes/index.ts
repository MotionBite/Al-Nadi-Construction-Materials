import { type SchemaTypeDefinition } from 'sanity';

import { categoryType } from './categoryType';
import { brandType } from './brandType';
import { productType } from './productType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [categoryType, brandType, productType],
};

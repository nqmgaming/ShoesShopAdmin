import { menu } from '../../../admin';
import { useEnvironmentVariableToDisableActions } from '../../../admin/features/useEnvironmentVariableToDisableActions';
import { ResourceFunction } from '../../../admin/types';
import { ProductModel } from '../models';

export const CreateProductResource: ResourceFunction<typeof ProductModel> = () => ({
  resource: ProductModel,
  features: [useEnvironmentVariableToDisableActions()],
  options: {
    navigation: menu.mongoose,
    properties: {
      _id: {
        isTitle: true,
      },
    },
  },
});

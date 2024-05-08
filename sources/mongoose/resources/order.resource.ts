import { menu } from '../../../admin';
import { useEnvironmentVariableToDisableActions } from '../../../admin/features/useEnvironmentVariableToDisableActions'
import { ResourceFunction } from '../../../admin/types';
import { OrderModel } from '../models/order.model';

export const CreateOrderResource: ResourceFunction<typeof OrderModel> = () => ({
  resource: OrderModel,
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

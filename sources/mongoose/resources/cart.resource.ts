import { menu } from '../../../admin';
import {useEnvironmentVariableToDisableActions} from "../../../admin/features/useEnvironmentVariableToDisableActions";
import { CartModel } from '../models/cart.model';
import {ResourceFunction} from "../../../admin/types";

export const CreateCartResource: ResourceFunction<typeof CartModel> = () => ({
  resource: CartModel,
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

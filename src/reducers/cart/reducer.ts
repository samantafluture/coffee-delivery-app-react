import { Coffee } from './../../contexts/CartContext';
import { Types } from './types';
import { clear, remove, add } from './actions';

interface CartAction {
  type: Types;
  id?: string;
  coffee?: Coffee;
}

interface CartState {
  coffees: Coffee[];
}

export function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case Types.CART_CLEAR:
      return { coffees: clear() };
    case Types.CART_REMOVE:
      return {
        coffees: remove(state.coffees, action.id),
      };
    case Types.CART_ADD:
      return {
        coffees: add(state.coffees, action.coffee),
      };
    default:
      return state;
  }
}
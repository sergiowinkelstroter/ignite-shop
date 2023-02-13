import { Product } from "@/context/CartContext";
import { ADD_TO_CART, REMOVE_ITEM } from "./Types";

enum ActionType {
  ADD_TO_CART = "ADD_TO_CART",
  REMOVE_ITEM = "REMOVE_ITEM",
}

interface CartState {
  cartItems: Product[];
}

interface Action {
  type: keyof typeof ActionType;
  payload?: any;
}

const CartReducer = (state: CartState, action: Action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    }
    case REMOVE_ITEM: {
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    }

    default:
      return state;
  }
};

export default CartReducer;

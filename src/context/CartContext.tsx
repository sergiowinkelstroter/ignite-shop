import CartReducer from "@/reducers/CartReducer";
import { ADD_TO_CART, REMOVE_ITEM } from "@/reducers/Types";
import axios from "axios";
import { v4 as uuid } from "uuid";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useReducer,
  useState,
} from "react";

interface CartProviderProps {
  children: ReactNode;
}

interface CartContextData {
  toggleShoppingCart: () => void;
  addToCart: (item: Product) => void;
  removeItem: (id: string) => void;
  cartItems: Product[];
  isCartVisibility: boolean;
  openToast: boolean;
  setOpenToast: Dispatch<SetStateAction<boolean>>;
  handleByProduct: () => void;
}

export interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  description: string;
  defaultPriceId: string;
}

export const CartContext = createContext({} as CartContextData);

export const CartProvider = ({ children }: CartProviderProps) => {
  const [isCartVisibility, setIsCartVisibilitye] = useState(false);
  const [openToast, setOpenToast] = useState(false);

  function toggleShoppingCart() {
    setIsCartVisibilitye(!isCartVisibility);
  }

  const initalState = {
    cartItems: [],
  };

  const [state, dispatch] = useReducer(CartReducer, initalState);

  const addToCart = (item: Product) => {
    const newItem = {
      name: item.name,
      description: item.description,
      price: item.price,
      id: uuid(),
      defaultPriceId: item.defaultPriceId,
      imageUrl: item.imageUrl,
    };

    dispatch({ type: ADD_TO_CART, payload: newItem });
  };

  const removeItem = (id: string) => {
    dispatch({ type: REMOVE_ITEM, payload: id });
  };

  const priceId: string[] = state.cartItems.map((item) => {
    return item.defaultPriceId;
  });

  async function handleByProduct() {
    try {
      const response = await axios.post("/api/checkout", {
        priceId,
      });

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (err) {
      alert("Falha ao direcionar ao checkout!");
    }
  }

  return (
    <CartContext.Provider
      value={{
        toggleShoppingCart,
        isCartVisibility,
        addToCart,
        removeItem,
        cartItems: state.cartItems,
        openToast,
        setOpenToast,
        handleByProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

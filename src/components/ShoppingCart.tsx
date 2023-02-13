import { CartContext } from "@/context/CartContext";
import {
  CloseButton,
  Footer,
  ImageContainer,
  Item,
  ItemContainer,
  ShoppingCartContainer,
} from "@/styles/components/ShoppingCart";
import { priceFormatted } from "@/utils/priceFormatted";
import Image from "next/image";
import { X } from "phosphor-react";
import { useContext } from "react";
import { toast } from "react-toastify";

interface ShoppingCartProps {
  isVisibility: () => void;
}

export const ShoppingCart = ({ isVisibility }: ShoppingCartProps) => {
  const { cartItems, removeItem, handleByProduct } = useContext(CartContext);

  function closeShoppingCart() {
    isVisibility();
  }

  function handleRemoveProduct(id: string) {
    toast.success("Voce removeu um produto da sua sacola");
    removeItem(id);
  }

  const totalPrice = cartItems.reduce(
    (acc, item) => Number(item.price) + acc,
    0
  );

  return (
    <ShoppingCartContainer>
      <CloseButton onClick={closeShoppingCart}>
        <X size={26} />
      </CloseButton>
      <div>
        <h3>Sacola de compras</h3>
        <ItemContainer>
          {cartItems.length > 0 ? (
            cartItems.map((item) => {
              return (
                <Item key={item.id}>
                  <ImageContainer>
                    <Image src={item.imageUrl} width={60} height={90} alt="" />
                  </ImageContainer>
                  <div>
                    <h5>{item.name}</h5>
                    <span>{priceFormatted(item.price / 100)}</span>
                    <button onClick={() => handleRemoveProduct(item.id)}>
                      Remover
                    </button>
                  </div>
                </Item>
              );
            })
          ) : (
            <p>Nenhum produto adicionado a sacola</p>
          )}
        </ItemContainer>
      </div>
      <Footer>
        <div>
          <span>Quantidade</span>
          <span>{cartItems.length} itens</span>
        </div>
        <div>
          <span>Valor total</span>
          <span>{priceFormatted(totalPrice / 100)}</span>
        </div>
        <button onClick={() => handleByProduct()}>Finalizar compra</button>
      </Footer>
    </ShoppingCartContainer>
  );
};

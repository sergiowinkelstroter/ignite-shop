import { Header, ShoppingCartButton } from "../styles/components/Header";
import logo from "../assets/logo.svg";
import Image from "next/image";
import { Handbag } from "phosphor-react";
import { useContext, useState } from "react";
import { ShoppingCart } from "./ShoppingCart";
import Link from "next/link";
import { CartContext } from "@/context/CartContext";

export const HeaderComponent = () => {
  const { isCartVisibility, toggleShoppingCart, cartItems } =
    useContext(CartContext);

  const numberItems = cartItems.length;

  return (
    <Header>
      <Link href="/">
        <Image src={logo} width={130} height={52} alt="" />
      </Link>
      <ShoppingCartButton onClick={toggleShoppingCart}>
        <Handbag size={30} />
        <span>{numberItems}</span>
      </ShoppingCartButton>
      {isCartVisibility && <ShoppingCart isVisibility={toggleShoppingCart} />}
    </Header>
  );
};

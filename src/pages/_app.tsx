import type { AppProps } from "next/app";
import { globalStyles } from "@/styles/global";

import { Container } from "src/styles/pages/app";
import { HeaderComponent } from "@/components/Header";
import { CartProvider } from "@/context/CartContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

globalStyles();
export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Container>
        <HeaderComponent />
        <Component {...pageProps} />
        <ToastContainer position="bottom-left" />
      </Container>
    </CartProvider>
  );
}

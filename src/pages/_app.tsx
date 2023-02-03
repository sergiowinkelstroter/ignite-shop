import type { AppProps } from "next/app";
import { globalStyles } from "@/styles/global";
import logo from "../assets/logo.svg";
import Image from "next/image";
import { Container, Header } from "src/styles/pages/app";

globalStyles();
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logo} width={130} height={52} alt="" />
      </Header>
      <Component {...pageProps} />
    </Container>
  );
}

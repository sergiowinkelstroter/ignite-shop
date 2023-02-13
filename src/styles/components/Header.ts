import { styled } from "..";

export const Header = styled("header", {
  padding: "2rem 0",
  width: "100%",
  maxWidth: 1180,
  margin: "0 auto",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const ShoppingCartButton = styled("button", {
  display: "flex",
  alignItems: "center",
  padding: "0.5rem",

  color: "$gray100",
  background: "$gray800",
  borderRadius: 6,
  border: 0,

  cursor: "pointer",

  position: "relative",

  span: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,

    position: "absolute",
    width: 24,
    height: 24,
    right: -7,
    top: -7,

    backgroundColor: "$green500",
    border: "3px solid $gray900",

    borderRadius: 10000000,
  },
});

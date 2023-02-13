import { styled } from "..";

export const ShoppingCartContainer = styled("div", {
  position: "absolute",
  width: 480,
  right: 0,
  top: 0,
  bottom: 0,

  background: "$gray800",
  boxShadow: "-4px 0px 30px rgba(0, 0, 0, 0.8)",

  zIndex: 100,

  paddingInline: "3rem",
  paddingTop: "5rem",

  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

export const CloseButton = styled("button", {
  background: "transparent",
  border: 0,
  color: "$gray100",
  cursor: "pointer",

  position: "absolute",
  width: 24,
  height: 24,
  left: 432,
  top: 24,
});

export const ItemContainer = styled("section", {
  height: "17rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "1rem",

  marginTop: "2rem",

  overflow: "auto",

  borderRadius: 6,
});

export const Item = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "1.2rem",

  width: "100%",

  div: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",

    h5: {
      fontSize: "$md",
      color: "$gray300",
      marginBottom: "0.5rem",
    },

    span: {
      fontSize: "$md",
      color: "$gray100",
      marginBottom: "1rem",
    },

    button: {
      backgroundColor: "transparent",
      border: 0,
      color: "$green500",
      fontSize: "1rem",

      cursor: "pointer",
    },
  },
});

export const ImageContainer = styled("div", {
  width: "100%",
  maxWidth: 90,
  height: "6rem",
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,
  padding: "0.25rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
  },
});

export const Footer = styled("footer", {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  marginTop: "2rem",

  width: "calc(480px - 6rem)",

  position: "absolute",
  bottom: 20,

  div: {
    display: "flex",
    justifyContent: "space-between",

    span: {
      fontSize: "1rem",
      color: "$gray300",
    },
  },

  button: {
    padding: "20px 32px",
    marginBottom: "1rem",

    border: 0,
    borderRadius: 6,

    fontSize: "$md",
    fontWeight: "bold",

    background: "$green500",
    color: "$white",
    cursor: "pointer",
  },
});

import React, { useContext } from "react";

import styles from "./Header.CartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../sources/cart-context";
function HeaderButton(props) {
  const itemCtx = useContext(CartContext);
  const totalItem = itemCtx.item.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);
  return (
    <button className={styles.button} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{totalItem}</span>
    </button>
  );
}

export default HeaderButton;

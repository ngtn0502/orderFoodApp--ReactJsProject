import React, { useState } from "react";
import styles from "./Cart.module.css";
import Card from "../UI/Card";
import CartItem from "./CartItem";
import Modal from "../UI/Modal";

const itemList = [{ id: "c1", name: "Sushi", amount: "2", price: 12.99 }];

function Cart(props) {
  const cartList = itemList.map((item) => {
    return <CartItem price={item.price} name={item.name}></CartItem>;
  });

  return (
    <div>
      <Modal onBlur={props.onHideCart}>
        ><ul className={styles["cart-items"]}>{cartList}</ul>
        <div className={styles.total}>
          <span>Total Amount</span>
          <span>39.99$</span>
        </div>
        <div className={styles.actions}>
          <button className={styles["button--alt"]} onClick={props.onHideCart}>
            Close
          </button>
          <button className={styles.button}>Pay</button>
        </div>
      </Modal>
    </div>
  );
}

export default Cart;

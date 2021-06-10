import React, { useReducer } from "react";
import CartContext from "./cart-context";

const initCart = {
  items: [],
  totalAmount: 0,
};
// Sử dụng Reducer Hook để quản lý state
// => Nhận giá trị từ addItemHandler thông qua Context hook => ta pass function dướI dạng props thông qua Context Hook 
// => Cụ thể ta gọi hàm addItemHandler ở MealsForm nơi đặt input sau đó truyền dữ liệu từ addItemHandler function từ input vào provider
// => Sau đó 

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItem = state.items.concat(action.updateItem);
    const updatedAmount =
      state.totalAmount + action.updateItem.price * action.updateItem.amount;

    return {
      items: updatedItem,
      totalAmount: updatedAmount,
    };
  }
  return initCart;
};
const CartProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, initCart);

  const addItemHandler = (item) => {
    dispatchCart({ type: "ADD", updateItem: item });
  };

  const removeItemHandler = (id) => {
    dispatchCart({ type: "Remove", id: id });
  };

  const addItem = {
    item: cartState.items,
    amount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };
  return (
    <CartContext.Provider value={addItem}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

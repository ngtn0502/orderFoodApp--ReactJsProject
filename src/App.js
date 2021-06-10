import Header from "../src/Component/Layout/Header";
import Meals from "../src/Component/Meals/Meals";
import Cart from "../src/Component/Cart/Cart";
import { Fragment, fragment, useState } from "react";
import CartProvider from "./sources/CartProvider";

function App() {
  const [cartIsShow, setCartIsShow] = useState(false);

  const showCartHandler = () => {
    setCartIsShow(true);
  };
  const hideCartHandler = () => {
    setCartIsShow(false);
  };

  return (
    <CartProvider>
      {cartIsShow && <Cart onHideCart={hideCartHandler}></Cart>}
      <Header onShowCart={showCartHandler}></Header>
      <Meals></Meals>
    </CartProvider>
  );
}

export default App;

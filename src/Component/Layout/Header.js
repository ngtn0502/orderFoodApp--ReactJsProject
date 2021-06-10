import { Fragment, fragment } from "react";
import styles from "./Header.module.css";
import srcImg from "../../img/meals.jpg";
import HeaderButton from "./Header.CartButton";
import Cart from "../Cart/Cart";

function Header(props) {
  return (
    <Fragment>
      <header className={styles.header}>
        <h2>Food order!</h2>
        <HeaderButton onClick={props.onShowCart}></HeaderButton>
      </header>
      <div className={styles["main-image"]}>
        <img src={srcImg} alt="A table of food!"></img>
      </div>
    </Fragment>
  );
}

export default Header;

import React, { useState } from "react";
import styles from "./CartItem.module.css";

import { connect } from "react-redux";
import {
  adjustItemQty,
  removeFromCart,
} from "../../../redux/Shopping/shopping-actions";

const CartItem = ({ item, adjustQty, removeFromCart }) => {
  const [input, setInput] = useState(item.qty);

  const onChangeHandler = (e) => {
    setInput(e.target.value);
    adjustQty(item.id, e.target.value);
  };

  return (
    <div className={styles.cartItem}>
      <img
        className={styles.cartItem__image}
        src={item.image}
        alt={item.title}
      />
      <div className={styles.cartItem__details}>
        <p className={styles.details__title}>{item.title}</p>
        <p className={styles.details__desc}>{item.description}</p>
        <p className={styles.details__price}>dkk {item.price}</p>
      </div>
      <div className={styles.cartItem__actions}>
        <div className={styles.cartItem__qty}>
          <label htmlFor="qty">Qty</label>
          <input
            min="1"
            type="number"
            id="qty"
            name="qty"
            value={input}
            onChange={onChangeHandler}
          />
        </div>
       
        <button
          onClick={() => removeFromCart(item.id)}
          className={styles.actions__deleteItemBtn}
        >
         
          <img
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fda%2Fimage-vector%2Frecycle-bin-icon-vector-trash-can-1723829275&psig=AOvVaw2GoGZxqvEbJUeiVbEMg4Cp&ust=1670458696132000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMDC39ud5vsCFQAAAAAdAAAAABAJ"
            alt=""
          />
        </button>
        <label>Remove the item using this button</label>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);

import React, { useState } from 'react';
import './CartButton.css'
import CartIcon from '../CartIcon/CartIcon'
import Modal from '../Modal/Modal';

function CartButton(props) {
  const [ifShow, setIfShow] = useState(false);

  const show = () => {
    !ifShow ? setIfShow(true) : setIfShow(false);
  }

  const modal = () => {
    if (ifShow) {
      return (<Modal />)
    }
  }

  return (
    <div className="CartBtnStyle" onClick={show()}>
      <CartIcon />
      <label className="CartBtnLabel">Your Cart</label>
      <label className="Counter">2</label>
      {ifShow && modal()}
    </div>
  )
}

export default CartButton

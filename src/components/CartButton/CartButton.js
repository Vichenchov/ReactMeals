import React from 'react'
import './CartButton.css'
import CartIcon from '../CartIcon/CartIcon'

function CartButton(props) {
  return (
    <div className="CartBtnStyle">
      <CartIcon />
      <label className="CartBtnLabel">Your Cart</label>
      <label className="Counter">2</label>
    </div>
  )
}

export default CartButton

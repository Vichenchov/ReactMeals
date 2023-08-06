import React, { useState } from 'react'
import classes from './CartButton.module.css'
import CartIcon from '../CartIcon/CartIcon'
import Modal from '../Modal/Modal'

const CartButton = (props) => {
  // const [ifShow, setIfShow] = useState(false)

  // const show = () => {
  //   !ifShow ? setIfShow(true) : setIfShow(false)
  // }

  // const modal = () => {
  //   if (ifShow) {
  //     return <Modal />
  //   }
  // }

  return (
    <div className={classes.CartBtnStyle}>
      <CartIcon />
      <label className={classes.CartBtnLabel}>Your Cart</label>
      <label className={classes.Counter}>2</label>
    </div>
  )
}

export default CartButton

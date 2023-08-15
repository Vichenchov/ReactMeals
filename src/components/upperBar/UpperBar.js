import React from 'react'
import CartButton from '../CartButton/CartButton'
import classes from './UpperBar.module.css'

const UpperBar = (props) => {
  return (
    <div className={classes.upperBarStyle}>
      <label className={classes.upperBarLabel}>{props.title}</label>
      <CartButton onClick={props.onShowCart} />
    </div>
  )
}

export default UpperBar

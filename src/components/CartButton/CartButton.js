import classes from './CartButton.module.css'
import CartIcon from '../CartIcon/CartIcon'
import { useContext } from 'react'
import CartContext from '../../store/cart-context'

const CartButton = (props) => {
  const cartCtx = useContext(CartContext)

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <div className={classes.CartBtnStyle} onClick={props.onClick}>
      <CartIcon />
      <label className={classes.CartBtnLabel}>Your Cart</label>
      <label className={classes.Counter}>{numberOfCartItems}</label>
    </div>
  )
}

export default CartButton

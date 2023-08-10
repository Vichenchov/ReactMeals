import classes from './Cart.module.css'
import Modal from '../Modal/Modal';

const Cart = (props) => {
  const cardItems = (<ul className={classes['cart-items ']}>{[{ id: 'c1', name: 'Sushi', amount: 2, price: '12.66' }].map((item) => (<li>{item.name}</li>))}</ul>);

  return (
    <Modal>
      {cardItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>36.71</span>
      </div>
      <div className={classes.action}>
        <button className={classes['button--alt']}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  )

}

export default Cart;

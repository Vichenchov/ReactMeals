import { useContext, useRef, useState } from 'react'
import classes from './MenuItem.module.css'
import CartContext from '../../store/cart-context'

const MenuItem = (props) => {
  const cartCtx = useContext(CartContext)
  const [amountIsValid, setAmountIsValid] = useState(true)
  const amountInputRef = useRef()

  const hr = () => {
    if (!props.ifLast) {
      return (
        <div className="hr">
          <hr />
        </div>
      )
    }
  }

  const submitHandler = (event) => {
    event.preventDefault()

    const enteredAmount = amountInputRef.current.value
    const enteredAmountNumber = +enteredAmount

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false)
      return
    }

    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: enteredAmountNumber,
      price: props.price,
    })
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.DishMainDiv}>
        <div className={classes.DishInfo}>
          <label className={classes.name}>{props.name}</label>
          <label className={classes.des}>{props.des}</label>
          <label className={classes.price}>${props.price}</label>
        </div>
        <div className={classes.DishAmount}>
          <div className={classes.AmountInfo}>
            <label className={classes.amountLbl}>Amount</label>
            <input
              ref={amountInputRef}
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              max="5"
              defaultValue={1}
            ></input>
          </div>
          <div className={classes.btnCenter}>
            <button className={classes.addBtn + ' btn btn-primary btn-sm'}>
              + ADD
            </button>
            {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
          </div>
        </div>
      </div>
      {hr()}
    </form>
  )
}

export default MenuItem

import classes from './MenuItem.module.css'

const MenuItem = (props) => {
  const hr = () => {
    if (!props.ifLast) {
      return (
        <div className="hr">
          <hr />
        </div>
      )
    }
  }


  


  return (
    <>
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
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              max="20"
            ></input>
          </div>
          <div className={classes.btnCenter}>
            <button className={classes.addBtn + ' btn btn-primary btn-sm'}>
              + ADD
            </button>
          </div>
        </div>
      </div>
      {hr()}
    </>
  )
}

export default MenuItem

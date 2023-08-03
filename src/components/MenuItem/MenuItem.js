import './MenuItem.css';

function MenuItem(props) {
    const hr = () => {
        if (!props.ifLast) {
            return (<div className='hr'>
                <hr />
            </div>)
        }
    }

    return <>
        <div className='DishMainDiv'>
            <div className='DishInfo'>
                <label className='name'>{props.name}</label>
                <label className='des'>{props.des}</label>
                <label className='price'>${props.price}</label>
            </div>
            <div className='DishAmount'>
                <div className='AmountInfo'>
                    <label className='amountLbl'>Amount</label>
                    <input type="number" id="quantity" name="quantity" min="1" max="20"></input>
                </div>
                <div className='btnCenter'>
                    <button className='btn btn-primary addBtn btn-sm'>+  ADD</button>
                </div>
            </div>
        </div>
        {hr()}
    </>
}

export default MenuItem;
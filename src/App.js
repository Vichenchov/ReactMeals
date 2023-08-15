import {useState} from 'react'
import UpperBar from './components/UpperBar/UpperBar'
import Img from './resources/img/cactus-jack-x-mcdonalds.jpg'
import Description from './components/Description/Description'
import Menu from './components/Menu/Menu'
import Cart from './components/Cart/Cart'
import CartProvider from './store/CartProvider'

function App() {
  const [cartIsShown,setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }


  return (
    <CartProvider>
      <div className="mainDiv">
        {cartIsShown && <Cart onClose={hideCartHandler}/>}
        <UpperBar title="ReactMeals" onShowCart={showCartHandler} />
        <div className="diagonal-crop">
          <img src={Img} className="imgSize diagonal-crop" />
        </div>
        <div className="desDiv">
          <Description />
        </div>
        <div className="menuDiv">
          <Menu />
        </div>
      </div>
    </CartProvider>
  )
}

export default App

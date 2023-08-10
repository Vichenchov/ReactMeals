import UpperBar from './components/UpperBar/UpperBar'
import Img from './resources/img/cactus-jack-x-mcdonalds.jpg'
import Description from './components/Description/Description'
import Menu from './components/Menu/Menu'
import Cart from './components/Cart/Cart'

function App() {
  return (
    <>
      <div className="mainDiv">
        <Cart/>
        <UpperBar title="ReactMeals" />
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
    </>
  )
}

export default App

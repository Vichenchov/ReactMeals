import UpperBar from './components/UpperBar/UpperBar'
import Img from './resources/img/cactus-jack-x-mcdonalds.jpg'
import Description from './components/Description/Description'
import MenuItem from './components/MenuItem/MenuItem'
import Menu from './components/Menu/Menu'

function App() {
  return (
    <>
      {/* <div className="mainDiv">
        <UpperBar title="ReactMeals" />
        <div className="diagonal-crop">
          <img src={Img} className="imgSize diagonal-crop" />
        </div>
        <div className="desDiv">
          <Description />
        </div>
      </div> */}
      <Menu/>
    </>
  )
}

export default App

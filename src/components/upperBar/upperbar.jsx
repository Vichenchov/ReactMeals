import Navbar from 'react-bootstrap/Navbar';
import './upperbar.css'

const UpperBar = (props) => {
    return (<>
        <Navbar className="navbar" data-bs-theme="dark">
            <Navbar.Brand className='brand' href="#home">ReactMeals</Navbar.Brand>
        </Navbar>
    </>)
}

export default UpperBar;
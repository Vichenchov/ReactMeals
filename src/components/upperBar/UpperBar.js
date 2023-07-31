import React from 'react'
import CartButton from '../CartButton/CartButton'
import './UpperBar.css'

function UpperBar(props) {
  return (
    <div className="upperBarStyle">
        <label className="upperBarLabel">{props.title}</label>
        <CartButton />
    </div>
  )
}

export default UpperBar

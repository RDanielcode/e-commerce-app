import React from 'react'
import { Link } from 'react-router-dom'
import AppContext from '../context/AppContext'
import '../styles/components/Checkout.css'

const Checkout = () => {
  const {state, removeFromCart} = React.useContext(AppContext);
  const {cart} = state;

  const handleRemove = item => removeFromCart(item);

  const handleTotal = () => {
    // const reducer = (ac, current) => ac + current.price;
    const sum = cart.reduce((ac, current) => {
      return ac + current.price;
    }, 0);
    return sum
  }


  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 ? <h3>Item list:</h3> : <h3>No list</h3>}
        {cart.map((item) => 
          <div className="Checkout-item" key={item.id}>
            <div className="Checkout-element">
              <h4>{item.title}</h4>
              <span> {item.price} $</span>
            </div>
            <button type="button" onClick={()=> handleRemove(item)}>
              <i className='fas fa-trash-alt'></i>
            </button>
          </div>
          )}
      </div>
      <div className="Checkout-sidebar">
        <h3>{`Total price: ${handleTotal()} $`}</h3>
        <Link to='/checkout/information'>
          <button type="button">Continue</button>
        </Link>
      </div>
    </div>
  )
}

// export {default as Checkout} from './Checkout'
export default Checkout
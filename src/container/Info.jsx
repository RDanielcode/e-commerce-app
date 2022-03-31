import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AppContext from '../context/AppContext'
import '../styles/components/Information.css'

const Info = () => {
  const {state, addToBuyer} = React.useContext(AppContext)
  const form = React.useRef(null)
  const {cart} = state
  const navigate = useNavigate();

  const handleSubmit = () =>{
    const formData = new FormData(form.current);
    const buyer = {
      'name': formData.get('name'),
      'email': formData.get('email'),
      'address': formData.get('address'),
      'building': formData.get('building'),
      'city': formData.get('city'),
      'country': formData.get('country'),
      'state': formData.get('state'),
      'cp': formData.get('cp'),
      'phone': formData.get('phone')

    }

    addToBuyer(buyer);
    navigate('/checkout/payment')
  }


  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Contact info:</h2>
        </div>
        <div className="Information-form">
          <form ref={form}>
            <input type="text" placeholder="Name" name="name" />
            <input type="text" placeholder="email" name="email" />
            <input type="text" placeholder="Address" name="addres" />
            <input type="text" placeholder="Building" name="apto" />
            <input type="text" placeholder="City" name="city" />
            <input type="text" placeholder="Country" name="country" />
            <input type="text" placeholder="State" name="state" />
            <input type="text" placeholder="Code postal" name="cp" />
            <input type="text" placeholder="Phone" name="phone" />
          </form>
        </div>
        <div className="Information-buttons">
          <Link to='/checkout'>
            <div className="Information-back">Back</div>
          </Link>
          <div className='Information-next'>
            <button className="Information-next" onClick={()=> handleSubmit()}>Pay</button>
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Order:</h3>
        {cart.map((item) => 
          <div className="Information-item" key={item.title}>
            <div className="Information-element">
              <h4>{item.title}</h4>
              <span>{item.price}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

// export {default as Info} from './Info'
export default Info
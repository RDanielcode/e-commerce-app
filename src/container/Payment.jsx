import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import AppContext from '../context/AppContext'
import {PayPalButton} from 'react-paypal-button-v2'
import '../styles/components/Payment.css'
import useGeolocal from '../hooks/useGeolocal'

const Payment = () => {
  const {state, addOrder, addAddress} = React.useContext(AppContext)
  const {cart, buyer} = state
  const navigate = useNavigate()
  const {position} = useGeolocal(buyer[0].city)
  

  const paypalOptions = {
    clientId: process.env.REACT_APP_CLIENT_ID,
    intent:'capture',
    currency:'USD'
  }

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect'
  }

  const handleTotal = () => {
    // const reducer = (ac, current) => ac + current.price;
    const sum = cart.reduce((ac, current) => {
      return ac + current.price;
    }, 0);
    return sum
  }

  const handleSuccess = (data) => {
    if(data.status === 'COMPLETED'){

      const newOrder = {
        buyer,
        product: cart,
        payment: data
      }
      
      addOrder(newOrder)
      addAddress(position)
      navigate('/checkout/success')
      // history.push('/checkout/success')
    }
  }


  return (
    <>
      <Helmet>
        Payment stage - Store
      </Helmet>
      <div className="Payment">
      <div className="Payment-content">
        <h3>total order:</h3>
        {cart.map(item=> 
          <div className="Payment-item" key={item.title}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>{item.price} $</span>
            </div>
          </div>
          )}
          <div className="Payment-button">
            <PayPalButton 
              paypalOptions={paypalOptions}
              buttonStyles={buttonStyles}
              amount={handleTotal()}
              // onPaymentStart={()=> console.log('start')}
              onSuccess={data => handleSuccess(data)}
              onError={error => console.log(error)}
              onCancel={data =>console.log(data)}
            />
          </div>
      </div>
      <div></div>
    </div>
    </>
  )
}

// export {default as Payment} from './Payment'
export default Payment
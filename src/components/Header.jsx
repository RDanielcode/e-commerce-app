import React from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/components/Header.css'

const Header = () => {
  const {state} = React.useContext(AppContext) 
  const {cart} = state

  return (
    <div className="Header">
      <Link to='/'>
        <h1 className="Header-title">Store</h1>
      </Link>
      <div className="Header-checkout">
        {cart.length > 0 && <div className='Header-alert'>{cart.length} </div>}
        <Link to='/checkout'>
          <i className='fas fa-shopping-basket'></i>
        </Link>
      </div>
    </div>
  );
}

export default Header;
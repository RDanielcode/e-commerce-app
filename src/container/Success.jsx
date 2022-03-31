import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import Map from '../components/Map';
// import useGeolocal from '../hooks/useGeolocal';
import '../styles/components/Success.css';

const Success = () => {
  const { state, position } = useContext(AppContext);
  const { buyer } = state;
  // const {latitude, longitude} = position
  // const {position} = useGeolocal(buyer[0].city)
  
  console.log(buyer)
  console.log(buyer[0].city)
  console.log(position.latitude)
  
  return (
    <div className="Success">
      <div className="Success-content">
        {buyer.length > 0 && 
        <h2>{`${buyer[0].name}, thanks for your buy`}</h2>
        }
        <span>Your order will be addressed to:</span>
        <div className="Success-position">
          <Map data={position} />
  
        </div>
      </div>
    </div>
  );
}

export default Success;
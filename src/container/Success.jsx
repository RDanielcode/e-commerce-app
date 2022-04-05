import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import AppContext from '../context/AppContext';
import Map from '../components/Map';
// import useGeolocal from '../hooks/useGeolocal';
import '../styles/components/Success.css';

const Success = () => {
  const { state} = useContext(AppContext);
  const { buyer, position } = state;
  // const {latitude, longitude} = position
  // const {position} = useGeolocal(buyer[0].city)
  
  console.log(buyer)
  console.log(buyer[0].city)
  console.log(position)
  

  if(position !== undefined){

    return (
      <>
        <Helmet>
          Success process
        </Helmet>
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
      </>
    );
  }else {
    <p>waiting</p>
  }
}

export default Success;
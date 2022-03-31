import React from 'react';
import initialState from '../initialState';

const useInitialState = () =>{

    const [state, setState] = React.useState(initialState);
    // const [position, setPosition] = React.useState({})

    const addToCart = payload => {        
        setState({
        ...state,
        cart : [...state.cart, payload]
    })}
    
    const removeFromCart = payload => {

        setState({
        ...state,
        cart : state.cart.filter(item => item.id !== payload.id)
    })}

    const addToBuyer = payload => setState({
        ...state,
        buyer: [...state.buyer, payload]
    })

    const addOrder = payload => setState({
        ...state,
        orders: [...state.orders, payload]
    })

    const addAddress = (payload) => setState({
        ...state,
        position: [...state.position, payload]
    })

    // React.useEffect(()=>{
    //     console.log('a')
    //     fetch(`http://api.positionstack.com/v1/forward?access_key=0da933893b180b718b09ed48f168ee14&query=maracaibo`)
    //       .then(response => response.json())
    //       .then(data => setPosition(data.data[0]))
  
    //       console.log(position)
    // },[])

    return {
        state,
        addToCart,
        removeFromCart,
        addToBuyer,
        addOrder,
        addAddress
        // position
    }
}

export default useInitialState
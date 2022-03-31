import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AppContext from '../context/AppContext'
import useInitialState from '../hooks/useInitialState'
// import {Home, Checkout, Info, Payment, Success, NotFound} from '../container'

import Home from '../container/Home'
import Checkout from '../container/Checkout'
import Info from '../container/Info'
import NotFound from '../container/NotFound'
import Success from '../container/Success'
import Payment from '../container/Payment'
import Layout from '../components/Layout';


const App = () => {
    const {state, addToCart, removeFromCart, addToBuyer, addOrder, position} = useInitialState()

    return(
        <AppContext.Provider value={{state, addToCart, removeFromCart, addToBuyer, addOrder, position}}>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route  path ='/' element={<Home/>}/>
                        <Route  path ='/checkout' element={<Checkout/>}/>
                        <Route  path ='/checkout/information' element={<Info/>}/>
                        <Route  path ='/checkout/payment' element={<Payment/>}/>
                        <Route  path ='/checkout/success' element={<Success/>}/>
                        <Route element={<NotFound/>}/>
                    </Routes>
                </Layout>
            </BrowserRouter>
        </AppContext.Provider>
    )
}

export default App
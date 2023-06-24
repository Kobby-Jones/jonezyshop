import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from '../App';
import SearchProduct from './SearchProduct';
function Routers() {
    return ( 
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/search/:category' element={<SearchProduct/>} />
        </Routes>
     );
}

export default Routers;
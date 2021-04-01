import React from 'react';
import { useSelector } from 'react-redux';
import { favouritesSelector } from '../../redux/selector/selector';
import Cart from '../../component/Cart';
import Header from '../../component/Header';

import './style.scss';

export default function Favourites() {
    const favourites = useSelector(favouritesSelector);
    
    return (
        <div>
            <Header />
            <div className='container-card'>
                {
                    favourites && favourites.map((item) => (
                        <Cart dataBeer={item} favourites={favourites} />
                    ))
                }
            </div>       
        </div>
    )
};
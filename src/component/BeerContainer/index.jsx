import React from 'react';
import { useDispatch } from 'react-redux';
import { favourites, idBeer } from '../../redux/action/favourites';

import './style.scss';

export default function BeerContainer({beerData}) {
    const dispatch = useDispatch();
    const {
        name,
        image_url,
        description,
        id,
    } = beerData;

    const handleBtn = () => {
        dispatch(idBeer(id));
        dispatch(favourites());
    }

    return (
        <div className='wraper-beer-container'>
            <img src={image_url} alt=""/>
            <div className='block-container'>
                <div className='container'>
                    <div className='name-beer'>{name}</div>
                    <div className='description'>{description}</div>  
                </div>
                <button onClick={() => handleBtn()}>btn</button>
            </div>
        </div>
    )
}
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { favouritesDelete, idBeerAdd, idBeerRemove } from '../../redux/action/favourites';
import { idBeeerSelector } from '../../redux/selector/selector';

import './style.scss'

export default function Cart({dataBeer, favourites}) {
    const dispatch = useDispatch()
    const [numberCount, setNumberCount] = useState(0)
    const IdBeer = useSelector(idBeeerSelector)
    const {
        name,
        image_url,
        srm,
        id
    } = dataBeer;

    useEffect(() => {
        const num = IdBeer.filter(i => i === id).length
        setNumberCount(num)
    }, [IdBeer, id])

    const hendelDelete = (e) => {
        const del = favourites.filter(i => i.id !== e)
        debugger
        return console.log(del)
    }
   
    return (
        <div className='wraper-cart'>
            <img src={image_url} alt=""/>   
            <div className='block-name'>
                <div className='name'>{name}</div>
            </div>
            <div className="cart-count">
                <button className='minus' onClick={() => dispatch(idBeerRemove(id))} >-</button>
                <div className='num'>
                    {numberCount}
                </div>
                <button className='plus' onClick={() => dispatch(idBeerAdd(id))} >+</button>
            </div>
            <div className='block-prise'>
                <div>{srm * numberCount} $</div>
            </div>
            <button onClick={() => dispatch(favouritesDelete(id))}>Delete</button>
        </div>
    )
}
import React from 'react';
import { Link } from 'react-router-dom';
import { FAVOURITES, ROOT } from '../../contacts/routes';
import { useSelector } from 'react-redux';
import { idBeeerSelector } from '../../redux/selector/selector';

import './style.scss'

export default function Header() {
    const idBeers = useSelector(idBeeerSelector);

    return (
        <div className='wraper-header'>
            <span className='logo'>Love Beers</span> 
            <div className='header-right-block'>
                <Link className='link' to={ROOT}>
                    Home
                </Link>
                <Link className='link' to={FAVOURITES}>
                    Favourites
                </Link>
                <span className='num-block'><p className='num'>{idBeers.length}</p></span>
            </div>
        </div>
    )
}
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { beerAction } from '../../redux/action/beer';
import Header from '../../component/Header';
import Content from '../../modules/Content';

export default function Home() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(beerAction())
    });

    return (
        <div>
            <Header />
            <Content />
        </div>
    );
};
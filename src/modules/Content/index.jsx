import React, { useState } from 'react';
import Search from '../../component/Search';
import BeerContainer from '../../component/BeerContainer';
import { useSelector } from 'react-redux';
import { beersSelector } from '../../redux/selector/selector';
import { debounce } from "debounce";

import './style.scss'

export default function Content() {
    const [value, setValue] = useState('');
    const beersData = useSelector(beersSelector);

    const handleChange = debounce((e) => {
        setValue(e);
    }, 500);
    
    const filterBeer = beersData?.filter((item) => (Object.values(item.name.toLowerCase()).join(' ').includes(value)));
    
    return (
        <div className='wraper-content'>
            <Search className='search' onChange={(e) => handleChange(e.target.value)} />
            <div className='beer-block' >
                {
                    filterBeer && filterBeer.map((item) => (
                        <BeerContainer beerData={item} />
                    ))
                }
            </div>
        </div>
    )
}
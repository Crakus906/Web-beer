import { combineReducers } from 'redux';
import beers from './beers'
import favourites from './favourites';

export default combineReducers({
    beers,
    favourites,
});
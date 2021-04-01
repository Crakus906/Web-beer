export const FAVOURITES = 'FAVOURITES';
export const FAVOURITES_DELETE = 'FAVOURITES_DELETE';
export const ID_BEER = 'ID_BEER';
export const ID_BEER_REMOVE = 'ID_BEER_REMOVE';
export const ID_BEER_ADD = 'ID_BEER_ADD';

export const idBeer = (id) => ({ type: ID_BEER, payload: id});
export const idBeerRemove = (id) => ({ type: ID_BEER_REMOVE, payload: id});
export const idBeerAdd = (id) => ({ type: ID_BEER_ADD, payload: id});

export const favourites = (data) => ({ type: FAVOURITES, payload: data});
export const favouritesDelete = (data) => ({type: FAVOURITES_DELETE, payload: data});

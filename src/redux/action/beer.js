import { api } from "../../contacts/api";

export const BEER_REQUEST = 'BEER_REQUEST';
export const BEER_RESPONSE = 'BEER_RESPONSE';
export const BEER_REJECT = 'BEER_REJECT';

export const beerRequest = () => ({type: BEER_REQUEST})
export const beerResponse = (data) => ({type: BEER_RESPONSE, payload: data})
export const beerReject = () => ({type: BEER_REJECT})

export const beerAction = () => async (dispatch) => {
    try {
        dispatch(beerRequest());
        const res = await api.get('/beers');
        dispatch(beerResponse(res.data))
    } catch (e) {
        dispatch(beerReject())
    }
}
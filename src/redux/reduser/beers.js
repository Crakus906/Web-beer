/* eslint-disable import/no-anonymous-default-export */
import {
    BEER_REJECT,
    BEER_RESPONSE,
    BEER_REQUEST
} from '../action/beer';
import { 
    ID_BEER,
    FAVOURITES,
    FAVOURITES_DELETE,
    ID_BEER_ADD,
    ID_BEER_REMOVE
} from '../action/favourites';

const initState = {
    apiBeer: [],
    id: [],
    favourites: []
}

export default (state = initState, { type, payload }) => {
    switch (type) {
        case BEER_REQUEST:
            return {
                ...state,
                apiBeer: null,
            };
        case BEER_RESPONSE:
            return {
                ...state,
                apiBeer: payload,
            };
        case BEER_REJECT:
            return {
                ...state,
                apiBeer: null,
            };
        case ID_BEER:
            // if (state.id.includes(payload)) return state;
            return {
                ...state,
                id: [...state.id, payload]
            }
        case ID_BEER_REMOVE:
            const index = state.id.findIndex(v => v === payload)
            state.id.splice(index, 1)
            return {
                ...state,
                id: [...state.id]
            }
        case ID_BEER_ADD:
            return {
                ...state,
                id: [...state.id, payload]
            }
        case FAVOURITES:
            return {
                ...state,
                favourites: state.apiBeer && state.apiBeer.filter(item => state.id.includes(item.id)),
            }
        case FAVOURITES_DELETE:
            const del = state.favourites.filter(i => i.id !== payload);
            const indexId = state.id.findIndex(v => v === payload)
            state.id.splice(indexId)
            return {
                ...state,
                favourites: [...del],
                id: [...state.id]
            }
      default:
        return state;
    }
  };
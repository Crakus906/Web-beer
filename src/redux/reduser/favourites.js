// /* eslint-disable import/no-anonymous-default-export */
// import { ID_BEER, FAVOURITES } from '../action/favourites';

// const initState = {
//     id: [],
//     favourites: []
// };

// export default (state = initState, { type, payload }) => {
//     switch (type) {
//         case ID_BEER:
//             // if (state.id.includes(payload)) return state;
//             return {
//                 ...state,
//                 id: [...state.id, payload]
//             }
//         case FAVOURITES:
//             return {
//                 ...state,
//                 favourites: payload,
//             }
//       default:
//         return state;
//     };
//   };
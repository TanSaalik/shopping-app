import {FETCH_SHOPPING_ITEMS} from '../actions';

export default (state = {}, action) => {
    switch(action.type) {
        case FETCH_SHOPPING_ITEMS:
            return action.payload;
        default:
            return state;
    }
};

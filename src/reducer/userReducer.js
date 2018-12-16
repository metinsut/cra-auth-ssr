import { FETCH_USER } from "../actions/actionTypes";

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_USER:
            return action.payload.data;
        default:
            return state;
    }
}
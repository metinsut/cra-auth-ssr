import { FETCH_DATA } from "../actions/actionTypes";

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_DATA:
            return action.payload.data;
        default:
            return state;
    }
}
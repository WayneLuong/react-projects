import {ADD_STEP, PREV_STEP, VALUES} from '../actions/types'

const initialState = {
    step:1,
    name:'',
    email:'',
    address:''
};

export default function (state= initialState, action) {
    switch(action.type) {
        case ADD_STEP:
        return {
         ...state,
         state: state.step = action.payload+1
        }
        case PREV_STEP:
        return {
            ...state,
            state: state.step = action.payload-1
        }
        case VALUES:
            return {
                ...state, ...action.payload
            }
        default:
        return state;
    }
}
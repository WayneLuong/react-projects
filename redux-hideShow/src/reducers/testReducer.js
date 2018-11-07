import {TEST_ACTION} from '../actions/types'

const initialState = {name:'john'}

export default function (state=initialState, action) {
    switch(action.type) {
        case TEST_ACTION:
        return {
            name:'John to Susan'
        }
        default:
        return state;
    }
}
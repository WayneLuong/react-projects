import {ADD_STEP, PREV_STEP, VALUES} from './types'

export const addStep = (step) => {
    return{
        type: ADD_STEP,
        payload:step
    }
}

export const prevStep = (step) => {
    return{
        type: PREV_STEP,
        payload:step
    }
}

export const addVal = (value) => {
    return{
        type: VALUES,
        payload: value
    }
}
import {GET, DELETE, ADD, EDIT} from '../actions/types'

const initialState = {
    contacts: [
        {
            id:1,
            name: 'jeff',
            email: 'email',
            age: 20
        },
        {
            id:2,
            name: 'jane',
            email: 'email',
            age: 21
        },
        {
            id:3,
            name: 'john',
            email: 'email',
            age: 25
        }
    ]
}

export default function (state=initialState, action){
    switch(action.type) {
        case GET:
        return{
            ...state,
            contacts: action.payload
        }
        case DELETE:
        return{
            ...state,
            contacts: state.contacts.filter(contact =>
                contact.id !== action.payload
            )
        }
        case ADD:
        return{
            ...state,
            contacts: [...state.contacts,action.payload]
        }
        case EDIT:
        return {
            ...state,
            contacts:state.contacts.map(
                contact => contact.id ===action.payload.id ?
                (contact = action.payload):contact
            )
        }
        default:
        return state;
    }
}
import {GET, DELETE, ADD, EDIT} from './types'
import axios from 'axios'

/* HTTP */
export const getContacts = () => async dispatch=>{
     const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    dispatch({
        type: GET,
        payload: res.data
    })
}

export const deleteContact = (id) => dispatch=>{
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
    dispatch({
        type: DELETE,
        payload: id
    })
}

export const addContact = (contact) => async dispatch=>{
    await axios.post('https://jsonplaceholder.typicode.com/users', contact)
    dispatch({
        type: ADD,
        payload: contact
    })
}

export const editContact = (contact) => async dispatch =>{
    await axios.put(`https://jsonplaceholder.typicode.com/users/${contact.id}`, contact)
    dispatch({
        type: EDIT,
        payload: contact
    })
}

/* LOCAL */
/* export const deleteContact = (id) => {
    return{
        type: DELETE,
        payload: id
    }
}

export const addContact = (contact) => {
    return{
        type: ADD,
        payload: contact
    }
}

export const editContact = (contact) => {
    return{
        type: EDIT,
        payload: contact
    }
} */
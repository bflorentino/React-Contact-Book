import React, { useReducer, useEffect } from 'react'
import AppRouter from './Routes/AppRouter'
import { contactsContext } from '../Contact/ContactContext';
import { ContactsReducer } from '../Contact/ContactReducer';

const init = () => {
    return JSON.parse(window.localStorage.getItem("contacts")) || [];
}

const ContactBook = () => {

    const [ contacts, dispatch ] = useReducer(ContactsReducer, [], init)

    useEffect(() => {
        
        window.localStorage.setItem('contacts', JSON.stringify(contacts))
        }, [ contacts ])

    return (
        <contactsContext.Provider
            value = {
                {
                    contacts,
                    dispatch
                }
            }
        >
            <AppRouter />
        </contactsContext.Provider>
    )
}

export default ContactBook
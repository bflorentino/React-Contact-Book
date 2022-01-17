import React, { useContext } from 'react'
import { contactsContext } from '../../Contact/ContactContext'
import { getContactsByName } from '../../Selectors/getContacts'
import { useForm } from '../Hooks/useForm'
import ContactCard from '../Small Components/ContactCard'

const ContactListPage = () => {
    
    const { contacts } = useContext(contactsContext)
    const [ formValues, handleInputChanges ] = useForm({
        search: ""
    }) 
    const { search } = formValues;

    let currentColor = -1;
    let isAnewLetter;
    const contactsByName = getContactsByName(search);

    const bgColors = [
            'bg-card-1', 
            'bg-card-2', 
            'bg-card-3', 
            'bg-card-4', 
            'bg-card-5',
            'bg-card-6',
         ]
    
    return (
        <>
            <h1 className='text-center dark:text-white dark:font-normal text font-bold text-3xl sm:text-4xl font-mukta mt-20'>My Contacts</h1>
            <p className='dark:text-white text-center font-mukta'>{contacts.length} contacts</p>
            <div className='flex flex-col justify-center w-full items-center mt-7 mb-12'>

                <div className='w-4/5 as:w-128 '>
                <form onSubmit={(e)=> e.preventDefault()}>
                    <input 
                            type="text"
                            autoComplete='off'
                            name = 'search'
                            value = {formValues.search}
                            onChange={ handleInputChanges }
                            placeholder=' Search...'
                            className='w-full outline-none py-1 pl-1 sm:py-2 ms:pl-2 placeholder:font-Fa placeholder:font-bold bg-transparent border-1 border-gray border dark:text-white dark:bg-hoverblue'
                        />
                </form>
                </div>
                {
                    search === ""
                    ? (contacts.map((contact, index) =>{

                         (currentColor === bgColors.length - 1 )
                         ? currentColor = 0
                         : currentColor++;
                         
                         if(index === 0)
                             isAnewLetter = true
                         else if(index > 0 && (contact.name[0] !== contacts[index - 1].name[0]))
                             isAnewLetter = true
                          else
                             isAnewLetter = false;
                         
                        return(
                            <ContactCard
                                key = {contact.phone}
                                contact = {contact}
                                color = {bgColors[currentColor]}
                                newLetter = { isAnewLetter }         
                            />
                        )}
                    ))
                    : (contactsByName.map(contact => {
                         (currentColor === bgColors.length - 1 )
                         ? currentColor = 0
                         : currentColor++;
    
                         return(
                            <ContactCard
                                key = {contact.phone}
                                contact = {contact}
                                color = {bgColors[currentColor]}
                                newLetter = { isAnewLetter }         
                            />
                            )}
                        ))
                    }
            </div>
        </>
    )
}

export default ContactListPage
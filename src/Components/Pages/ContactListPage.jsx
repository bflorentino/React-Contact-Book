import React, { useContext } from 'react'
import { contactsContext } from '../Contact/ContactContext'
import { getContactsByName } from '../Selectors/getContacts'
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
            <h1 className='text-center text font-bold text-4xl font-mukta mt-9'>My Contacts</h1>
            <p className='text-center font-mukta'>{contacts.length} contacts</p>
            <div className='flex flex-col justify-center w-full items-center mt-7'>
                <form>
                    <input 
                            type="text"
                            autoComplete='off'
                            name = 'search'
                            value = {formValues.search}
                            onChange={ handleInputChanges }
                            placeholder=' Search a contact'
                            className='w-128 outline-none py-2 pl-2 placeholder:font-Fa placeholder:font-bold'
                        />
                </form>
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
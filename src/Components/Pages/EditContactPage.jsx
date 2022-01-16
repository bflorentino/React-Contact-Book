import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { contactsContext } from '../../Contact/ContactContext';
import { getContactsByPhoneNumber } from '../../Selectors/getContacts';
import { Types } from '../../Types/types';
import { useForm } from '../Hooks/useForm';
import ContactForm from '../Small Components/ContactForm';

const EditContactPage = () => {

    const { contactPhone } = useParams();
    const history = useNavigate();
    const { dispatch } = useContext(contactsContext);
    const contact = getContactsByPhoneNumber(contactPhone);

    const [ formValues,  handleInputChanges ] = useForm({
        name: contact.name,
        phone: contact.phone,
        email: contact.email,
        address: contact.address,
        relationship: contact.relationship
    });

    const handleEditContact = (e) => {
        e.preventDefault();
        dispatch({
            type : Types.Edit,
            payload : {    
                ...formValues
            }             
        })
        history('/', {replace : true})
    }

    return (
        <div className='flex justify-center items-center w-screen'>
            <ContactForm 
                formValues = { formValues }
                handleInputChanges={ handleInputChanges }
                handleSubmit={ handleEditContact } 
                formTitle={ 'Edit Contact' }
            />        
       </div>
    )
}

export default EditContactPage
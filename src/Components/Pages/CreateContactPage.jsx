import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { contactsContext } from '../../Contact/ContactContext';
import { Types } from '../../Types/types';
import { useForm } from '../Hooks/useForm'
import ContactForm from '../Small Components/ContactForm';

const CreateContactPage = () => {

    const { dispatch } = useContext(contactsContext)
    const history = useNavigate();

    const [ formValues,  handleInputChanges ] = useForm({
        name: "",
        phone: "",
        email: "",
        address: "",
        relationship: ""
    });

    const handleAddContact = ( e ) =>  {
        e.preventDefault();
        dispatch({
            type: Types.Add,
            payload: {
                ...formValues,
                name: formValues.name[0].toUpperCase()+ formValues.name.slice(1),
            } 
        })
        history('/', {replace:true} )
    }
    
    return (
        <div className='flex justify-center items-center w-screen'>
            <ContactForm 
                formValues={ formValues }
                handleInputChanges={handleInputChanges}
                handleSubmit={ handleAddContact } 
                formTitle = { 'New Contact' }
            />
        </div>
    )
}

export default CreateContactPage
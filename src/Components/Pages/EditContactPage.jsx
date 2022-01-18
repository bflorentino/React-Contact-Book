import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { contactsContext } from '../../Contact/ContactContext';
import { getContactById } from '../../Selectors/getContacts';
import { Types } from '../../Types/types';
import { validateContactInfo } from '../../Helpers/validateData';
import { validateForm } from '../../Helpers/validateForm';
import { useForm } from '../Hooks/useForm';
import ContactForm from '../Small Components/ContactForm';

toast.configure();

const EditContactPage = () => {

    const { contactId } = useParams();
    const history = useNavigate();
    const { dispatch } = useContext(contactsContext);
    const contact = getContactById(contactId);

    const [ formValues,  handleInputChanges ] = useForm({
        name: contact.name,
        phone: contact.phone,
        email: contact.email,
        address: contact.address,
        relationship: contact.relationship
    });

    const handleEditContact = (e) => { 
        e.preventDefault();
        const response = validateForm(formValues);
        
        if(response === true){

            const validateDataResponse = validateContactInfo(formValues.phone.replace(/-/g, ""), contactId)
            
            if(validateDataResponse === true){
                dispatch({
                    type : Types.Edit,
                    payload : {    
                        ...formValues,
                        id:contactId
                    }             
                })

                history('/', {replace:true} )

                toast.success("Contact info was edited", {
                    position: toast.POSITION.TOP_LEFT,
                    autoClose:3000})
            }
            else{
                toast.error(validateDataResponse, {
                    position: toast.POSITION.TOP_LEFT,
                    autoClose:3000});
            }
        }
        else{
            toast.error(response, {
                position: toast.POSITION.TOP_LEFT,
                autoClose:3000});
        }
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
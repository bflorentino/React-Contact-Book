import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { contactsContext } from '../../Contact/ContactContext';
import { Types } from '../../Types/types';
import { useForm } from '../Hooks/useForm'
import ContactForm from '../Small Components/ContactForm';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { validateForm } from '../../Helpers/validateForm';
import { CreateID } from '../../Helpers/CreateID';
import { validateContactInfo } from '../../Helpers/validateData';

toast.configure();

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

        const response = validateForm(formValues)

        if(response === true){
            
            const id = CreateID();
            const validateDataResponse = validateContactInfo(formValues.phone.replace(/-/g, ""), id, "create")
            
            if(validateDataResponse === true){
                
                dispatch({
                    type: Types.Add,
                    payload: {
                        ...formValues,
                        id,
                        name: formValues.name[0].toUpperCase()+ formValues.name.slice(1),
                        phone: formValues.phone.replace(/-/g, "")
                    } 
                })

                history('/', {replace:true} )

                toast.success("Contact was created", {
                    position: toast.POSITION.TOP_LEFT,
                    autoClose:3000})
            }else{
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
                formValues={ formValues }
                handleInputChanges={handleInputChanges}
                handleSubmit={ handleAddContact } 
                formTitle = { 'New Contact' }
            />
        </div>
    )
}

export default CreateContactPage
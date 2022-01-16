import React, { useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { contactsContext } from '../../Contact/ContactContext';
import { getContactsByPhoneNumber } from '../../Selectors/getContacts';
import { Types } from '../../Types/types';
import ContactInfoData from '../Small Components/ContactInfoData';

const ContactInfoPage = () => {

    const { contactPhone } = useParams();
    const history = useNavigate();
    const contact = getContactsByPhoneNumber(contactPhone);
    const { dispatch } = useContext( contactsContext )
    
    const handleEdit = () => history(`/EditContact/${ contactPhone }`)

    const handleDelete =  (e) => {

        dispatch({
            type: Types.Delete,
            payload : {
                ...contact
            }
        })
        history('/', {replace : true})
    }

    return (
        <div className='w-4/5 rounded mt-20 m-auto flex flex-row flex-wrap'>
            <div className='w-full flex flex-col items-center justify-center'>
            <h1 className='text-center text-4xl'>Contact Info</h1>
                <img src="../assets/Icons/user.png" 
                    alt="user"
                    className = 'w-40 h-40 mt-5' 
                />
                <p className = 'flex flex-row text-3xl font-mukta'> 
                    {contact.name}
                    <img 
                        src="../assets/Icons/favoriteYellow.png" 
                        alt="favorite" 
                        className='w-8 h-8 ml-4'/> 
                </p>
                <p className = 'text-sm'> 
                    {contactPhone}   
                </p>
                <a href= {`tel:${contact.phone}`}> 
                    <img 
                        src="../assets/Icons/Phone.png" 
                        alt="Llamar" 
                        className='w-9 mt-4'
                    />
                </a> 
              
            </div>
            <div className = 'w-full flex-col'>

                <ContactInfoData 
                    data= {contact.phone} 
                    imgSrc={'../assets/Icons/Phonecard.png'}
                />
                <ContactInfoData 
                    data= {contact.name} 
                    imgSrc={'../assets/Icons/name.png'}
                />
                {
                    contact.email !== "" &&
                    <ContactInfoData 
                      data= {contact.email} 
                      imgSrc={'../assets/Icons/Email.png'}
                  />
                }
                {   contact.address !== "" &&
                    <ContactInfoData 
                      data= {contact.address} 
                      imgSrc={'../assets/Icons/Address.png'}
                  />
                }
                {
                    contact.relationship &&
                    <ContactInfoData 
                      data= {contact.relationship} 
                      imgSrc={'../assets/Icons/relationship.png'}
                  />
                }
                <div className='flex flex-row justify-center mt-12 mb-5'>
                    <div className='flex flex-col items-center px-8 py-2 cursor-pointer hover:bg-hoverblue' onClick={ handleEdit }>
                        <img  
                            src="../assets/Icons/Editsection.png" 
                            alt=""
                            className='w-10 h-10'
                        />
                        <p>Edit</p>
                    </div>
                    <div className='flex flex-col items-center px-8 py-2 cursor-pointer hover:bg-hoverblue' onClick={  handleDelete }>
                        <img  
                            src="../assets/Icons/Delete.png" 
                            alt=""
                            className='w-10 h-10'
                        />
                        <p>Delete</p>
                </div>
            </div>
        </div>
        
            </div>
    )
}

export default ContactInfoPage
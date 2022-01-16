import React from 'react'
import {  useNavigate } from 'react-router-dom'
import ContactFirstLetter from './ContactFirstLetter';

const ContactCard = ( { contact, color, newLetter } ) => {

    const history = useNavigate();

    const { name, phone } = contact

    const handleViewContact = (e) => {
        history(`/Contact-Info/${phone}`);
    }

    return (
        <>
            <div className='flex flex-row flex-wrap w-128 mt-2 cursor-pointer' >
            {
                newLetter && (<ContactFirstLetter letter = {name[0]} />)  
            }
            <div className={`${color} rounded-full py-2 px-4 text-white text-center font-mukta text-xl font-medium w-12`} onClick={ handleViewContact }>
                {name[0]}
            </div>
            <div className='flex flex-col ml-2 w-card mt-2 'onClick={ handleViewContact } >
                <div className='ml-8'>
                    <p className='text-xl font-mukta'>{name}</p>
                    <p className='text-sm text-gray font-mukta'>{phone}</p>
                </div>
            </div>

            <div>
                <a href= {`tel:${phone}`}> 
                    <img 
                        src="./assets/Icons/Phone.png" 
                        alt="Llamar" 
                        className='w-9 mt-4'
                    />
                </a> 
            </div>
        </div>
        </>
    )
}

export default ContactCard
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
            <div className='flex flex-row flex-wrap items-center w-4/5 as:w-128 mt-2 cursor-pointer' >
            <div className='w-1/5'>
                {
                    newLetter && (<ContactFirstLetter letter = {name[0]} />)  
                }
                <div className={`${color} rounded-full py-1 px-3 text-white text-center font-mukta text-xl font-medium w-10 h-10 sm:w-14 sm:h-14 leading-normal`} onClick={ handleViewContact }>
                    {name[0]}
                </div>
            </div>
                <div className='flex flex-col ml-2 w-3/5 as:w-card mt-2 'onClick={ handleViewContact } >
                    <div className='ml-2 mt-4'>
                        <p className='text-xl font-mukta dark:text-white'>{name}</p>
                        <p className='text-lg text-gray font-mukta'>{phone}</p>
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
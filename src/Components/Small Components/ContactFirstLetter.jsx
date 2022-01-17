import React from 'react'

const ContactFirstLetter = ( { letter } ) => {
    return (
        <div className='w-full divide-y mt-2'>
            <p className='dark:text-white text-2xl text-mukta  ml-4 '> {letter} </p>
        </div>
    )
}

export default ContactFirstLetter

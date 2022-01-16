import React from 'react'

const ContactFirstLetter = ( { letter } ) => {
    return (
        <div className='w-full divide-y mt-2'>
            <p className='text-2xl text-mukta text-left ml-4 '> {letter} </p>
        </div>
    )
}

export default ContactFirstLetter

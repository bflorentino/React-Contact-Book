import React from 'react'

const ContactInfoData = ( {data, imgSrc }) => {
    return (
        <article className='flex flex-row items-center border-1 border-blue border-t h-12 w-full pl-3 dark:border-white'>
            <img 
                src= {imgSrc} 
                alt="Address" 
                className='w-6 h-6'
            />
            <p className='ml-5 text-lg dark:text-white'>
                { data }
            </p>
        </article>
    )
}

export default ContactInfoData
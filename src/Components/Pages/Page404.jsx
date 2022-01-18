import React from 'react'

const Page404 = () => {
    console.log("Hola mundo")
    return (
        <div className='flex items-center justify-center w-screen h-screen'>
            <div >
                <p className='text-sm sm:text-2xl text-gray'>Error 404</p>
                <h1 className='text-xl sm:text-4xl text-black dark:text-white'>Sorry, page not found</h1>
            </div>
        </div>
    )
}

export default Page404

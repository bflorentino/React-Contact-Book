import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const NavBar = () => {

    const location = useLocation();
    const history = useNavigate();
    
    const goBack = ( e ) => history(-1);

    const setAppTheme = (e) =>{
        document.getElementById("root").classList.toggle("dark-root")  
        document.documentElement.classList.toggle('dark')
    } 

    return (
        <nav className='bg-blue h-14 dark:bg-dark-nav fixed w-full top-0 left-0 right-0'>
            <div className='flex flex-row flex-wrap items-center w-full justify-start'>
                    <div>
                        {
                            location.pathname === '/'
                            ? <Link to = '/' >Phone</Link>
                            : <button 
                                className='goBack text-white text-lg sm:text-2xl hover:bg-hoverblue py-3 px-2'
                                onClick={ goBack }
                              > 
                                {/* <img 
                                    src='./assets/Icons/Back.png' 
                                    alt="Go Back" 
                                />  */}
                                Go Back
                              </button>
                        }
                    </div>
                    
                <div className='flex flex-rows ml-auto justify-between'>
                {
                    location.pathname !== '/CreateContact' &&
                    <>
                    <div className='pl-3 pr-3 py-3 hover:bg-hoverblue'>
                        <Link to = '/CreateContact' className='text-white text-lg sm:text-2xl'>
                            {/* <img 
                                src='./assets/Icons/Add.png' 
                                alt="Add Contact"
                                className='w-8'
                            /> */}
                            New Contact
                        </Link>
                    </div>
                    </>
                }
                    <div className='pl-5 pr-5 py-3 hover:bg-hoverblue'>
                        <button 
                            className='text-white text-lg sm:text-2xl'
                            onClick={ setAppTheme }>
                            {/* <img 
                                src='./assets/Icons/settings.png' 
                                alt="Settings" 
                                className='w-8'
                            /> */}
                            Dark
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
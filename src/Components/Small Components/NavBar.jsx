import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const NavBar = () => {

    const location = useLocation();
    const history = useNavigate();
    const [ theme, setTheme ] = useState(window.localStorage.theme === "dark" 
                                        ?"Ligth"
                                        :"Dark")
    
    const goBack = ( e ) => history(-1);

    const setAppTheme = (e) =>{

        window.localStorage.theme === "dark"
        ? localStorage.removeItem("theme")
        :  localStorage.theme = "dark"

        document.getElementById("root").classList.toggle("dark-root")  
        document.documentElement.classList.toggle('dark')

        setTheme(window.localStorage.theme === "dark" ?"Ligth" :"Dark")
    } 

    return (
        <nav className='bg-blue h-14 dark:bg-dark-nav fixed w-full top-0 left-0 right-0'>
            <div className='flex flex-row flex-wrap items-center w-full justify-start'>
                    <div>
                        {
                            location.pathname === '/'
                            ? <Link to = '/' >
                                <img 
                                    src="./assets/Icons/phone-white.png" 
                                    alt="phone" 
                                    className='w-8 h-8 ml-4' 
                                />
                              </Link>
                            : <button 
                                className='goBack text-white text-lg sm:text-2xl hover:bg-hoverblue py-3 px-2'
                                onClick={ goBack }
                              > 
                                Back
                              </button>
                        }
                    </div>
                    
                <div className='flex flex-rows ml-auto justify-between'>
                {
                    (location.pathname === '/') &&
                    <>
                    <div className='pl-3 pr-3 py-3 hover:bg-hoverblue'>
                        <Link to = '/CreateContact' className='text-white text-lg sm:text-2xl'>
                            New Contact
                        </Link>
                    </div>
                    </>
                }
                    <div className='pl-5 pr-5 py-3 hover:bg-hoverblue'>
                        <button 
                            className='text-white text-lg sm:text-2xl'
                            onClick={ setAppTheme }>
                            {theme}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
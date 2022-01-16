import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const NavBar = () => {

    const location = useLocation();
    const history = useNavigate();
    
    const goBack = ( e ) => history(-1);

    return (
        <nav className='bg-blue h-14'>
            <div className='flex flex-row flex-wrap items-center w-full justify-start'>
                    <div>
                        {
                            location.pathname === '/'
                            ? <Link to = '/' >Phone</Link>
                            : <button 
                                className='goBack'
                                onClick={ goBack }
                              > 
                                <img 
                                    src='./assets/Icons/Back.png' 
                                    alt="Go Back"
                                     
                                /> 
                              </button>
                        }
                    </div>
                    
                <div className='flex flex-rows ml-auto justify-between'>
                {
                    location.pathname !== '/CreateContact' &&
                    <>
                    <div className='pl-3 pr-3 pt-1 pb-1 hover:bg-hoverblue'>
                        <Link to = '/CreateContact'>
                            <img 
                                src='./assets/Icons/Add.png' 
                                alt="Add Contact"
                                className='w-8'
                            />
                        </Link>
                    </div>
                    </>
                }
                    <div className='pl-3 pr-3 pt-1 pb-1 hover:bg-hoverblue'>
                        <Link to = '/Settings'>
                            <img 
                                src='./assets/Icons/settings.png' 
                                alt="Settings" 
                                className='w-8'
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
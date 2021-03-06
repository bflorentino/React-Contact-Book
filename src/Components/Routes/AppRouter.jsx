import React from 'react'
import { BrowserRouter as 
    Router, 
    Route,
    Routes } from "react-router-dom";
import ContactInfoPage from '../Pages/ContactInfoPage';
import ContactListPage from '../Pages/ContactListPage';
import CreateContactPage from '../Pages/CreateContactPage';
import EditContactPage from '../Pages/EditContactPage';
import Page404 from '../Pages/Page404';
import NavBar from '../Small Components/NavBar';

const AppRouter = () => {
    return (
        <Router >
            <div>
                <NavBar />
                <Routes>
                    <Route 
                        exact
                        path='/Contact-List'
                        element = {<ContactListPage /> } 
                    />
                    <Route
                        exact
                        path='/Contact-Info/:contactId'
                        element = { <ContactInfoPage /> }
                    />
                    <Route
                        exact
                        path='/CreateContact'
                        element = { <CreateContactPage /> }
                    />
                    <Route
                        exact
                        path='/EditContact/:contactId'
                        element = { <EditContactPage /> }
                    />
                    <Route
                        exact
                        path='/'
                        element = { <ContactListPage /> }
                    />
                    <Route
                        exact
                        path='*'
                        element = { <Page404 /> }
                    />                                      
                </Routes>
            </div>

        </Router>
    )
}

export default AppRouter
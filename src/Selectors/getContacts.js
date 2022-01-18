
// Search by Phone Number
export const getContactById = ( id ) => {
    
    const contacts = JSON.parse(window.localStorage.getItem("contacts"));
    return contacts.find((contact) => contact.id === id)
}

// Search by Name
export const getContactsByName = ( name ) => {

    const contacts = JSON.parse(window.localStorage.getItem("contacts"));
    return contacts !== null 
                ? contacts.filter(contact => contact.name.toLowerCase().includes(name.toLowerCase()))
                :   []
}
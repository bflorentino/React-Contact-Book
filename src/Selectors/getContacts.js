
// Search by Phone Number
export const getContactsByPhoneNumber = ( phoneNumber ) => {
    
    const contacts = JSON.parse(window.localStorage.getItem("contacts"));
    return contacts.find((contact) => contact.phone === phoneNumber)
}

// Search by Name
export const getContactsByName = ( name ) => {

    const contacts = JSON.parse(window.localStorage.getItem("contacts"));
    return contacts.filter(contact => contact.name.toLowerCase().includes(name.toLowerCase())) || []
}


export const validateContactInfo = ( phone, id, type ) => {
    // Validate there is no data duplication in localStorage.

    const contacts = JSON.parse(window.localStorage.getItem("contacts"))
    
    if(type === "create" && contacts.find(contact => contact.id === id)) return "Sorry, press the button Save Changes over"
    
    if(contacts.find(contact => contact.phone === phone && contact.id !== id)) return "You already have a contact with this phone number, enter a new phone number";

    return true;
}
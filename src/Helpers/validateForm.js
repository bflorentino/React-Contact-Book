
export const validateForm = ( {name, phone, email} ) => {

    // Validate form with a regular expression for phone Number and email.
    // Name and phone are required inputs, so it's necessary to check if they're not empty.
    // Email is not required, but in case the user enters an email it's necessary to check if it's a valid email.

    const phoneRegEx = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im;
    const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(name === "") return "Name is required";
    if(phone === "") return "Phone is required";
    if(name.length > 20) return "Contacts name should not contain over 20 characters";
    if(!phoneRegEx.test(phone)) return "Invalid Phone Number";
    if(email !== "" && !emailRegEx.test(email)) return "Invalid email";
    
    return true;
}
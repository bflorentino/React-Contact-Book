
export const validateForm = ( {name, phone, email} ) => {

    const phoneRegEx = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(name === "") return "Name is required";
    if(phone === "") return "Phone is required";
    if(!phoneRegEx.test(phone)) return "Invalid Phone Number";
    if(email !== "" && !emailRegEx.test(email)) return "Invalid email";
    
    return true;
}
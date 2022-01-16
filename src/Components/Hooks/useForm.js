import { useState } from "react"

export const useForm = (initialState = {}) => {

    const [formValues, setFormValues] = useState(initialState)
    
    const handleInputChanges = ({ target }) =>{
        setFormValues({
            ...formValues,
            [ target.name ]: target.value
        })
    }

    const handleSelectionChanges = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.checked
        })
    }
    
    const reset = ( value ) => {
        setFormValues(value)
    }
    
    return [formValues, handleInputChanges, handleSelectionChanges, reset]
}
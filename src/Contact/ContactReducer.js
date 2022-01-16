import { Types } from "../Types/types"

export const ContactsReducer = ( state, action ) => {
    
    switch ( action.type ) {
        
        case Types.Add:
            return [...state, action.payload].sort((a, b) =>{
                if (a.name < b.name) return -1;
                if (a.name > b.name) return 1;
                return 0;
            })
        
        case Types.Edit:
            return state.map(contact => (contact.phone === action.payload.phone)
                                        ? {
                                            ...action.payload
                                        }
                                        : contact )
        
        case Types.Delete:
            return state.filter(contact => contact.phone !== action.payload.phone)
        
            default:
            return state
    }
}
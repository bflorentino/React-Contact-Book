import { Types } from "../Types/types"

export const ContactsReducer = ( state, action ) => {

    // Contact list is managed by this reducer. Available actions are Add, Edit and Delete.
    
    switch ( action.type ) {
        
        case Types.Add:
            return [...state, action.payload].sort((a, b) =>{
                if (a.name < b.name) return -1;
                if (a.name > b.name) return 1;
                return 0;
            })
        
        case Types.Edit:
            return state.map(contact => (contact.id === action.payload.id)
                                        ? {
                                            ...action.payload
                                        }
                                        : contact )
        
        case Types.Delete:
            return state.filter(contact => contact.id !== action.payload.id)
        
            default:
            return state
    }
}
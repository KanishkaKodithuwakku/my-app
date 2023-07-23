import React, { createContext,useContext} from 'react'

const UserContext = createContext();
const UserContextProvider = ({ children}) => { 
    return (
        <UserContext.Provider>
            { children}
        </UserContext.Provider>
    )

}

//custom hook
const useUserContext = () => {
    const context = useContext(UserContext);
    
    if (context === undefined) { 
        throw new Error('Context Error')
    }
    return context;
};

export { UserContextProvider, useUserContext };

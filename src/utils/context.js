import React, { createContext, useContext } from 'react'
import { useFetch } from '../App';

const PlanetContext = createContext();
const PlanetContextProvider = ({ children }) => { 
    
    const [loading, result, error] = useFetch('/planets');
    const value = {loading, result,error}

    return (
      <PlanetContext.Provider value={value}>{children}</PlanetContext.Provider>
    );


}
//using context as custom hook
const usePlanetContext = () => { 
    const context = useContext(PlanetContext);
    if (context === undefined)
        throw new Error("usePlanet Context error custom hook error")
    return context;
}


export { usePlanetContext, PlanetContextProvider };

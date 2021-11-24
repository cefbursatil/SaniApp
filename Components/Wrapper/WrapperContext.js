import React from 'react'
import { GeneralContextProvider } from '../../context/GeneralContext'
// Aca traeré todos los contextos que tenga el proyecto
const WrapperContext = ({children}) => {
  return (
    <GeneralContextProvider>
            {children}
    </GeneralContextProvider>  
  )
}

export default WrapperContext
import React, { useState, createContext} from "react"
export const GeneralContext = createContext({})

export const GeneralContextProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [clicked, setClicked] = useState(false);
    const [activateSearch, setactivateSearch] = useState(false);
  return (
    <GeneralContext.Provider
      value={{
        loading,
        setLoading,
        search,
        setSearch,
        clicked,
        setClicked,
        activateSearch,
        setactivateSearch,
      }}
    >
      {children}
    </GeneralContext.Provider>
  )
}
import React, { createContext, useContext, useState } from "react";

const FilterContext = createContext();

function FilterProvider({ children }) {    

    const [filterText, setFilterText] = useState("");
    
    const values = {
        filterText,
        setFilterText
    }

    return (
        <FilterContext.Provider value={values}>
            {children}
        </FilterContext.Provider>
    )
}

const useFilter = () => useContext(FilterContext);

export { FilterProvider, useFilter }
import React, { createContext, useState} from "react"

export const StudentsContext = createContext()

export const StudentsProvider = ({ children }) => {
    const [students, setStudents] = useState([{id: 1, name: "John"}, {id: 2, name: "James"}]);

    return <StudentsContext.Provider value={{ students, setStudents }}>
        {children}
    </StudentsContext.Provider>

}
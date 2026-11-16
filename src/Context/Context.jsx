import { createContext, useState } from "react";
import { uz } from "../../lang";

export const Context = createContext()
const ContextProvider = ({ children }) => {
    const [lang, setLang] = useState(uz);
    const delUser =(id)=>{
setNotes(notes.filter(note=>note.id))
    }
    return (
        <>
            <Context.Provider value={{ setUpdate, update, lang, setLang }}>
                {children}
            </Context.Provider>
        </>
    )
}

export default ContextProvider 
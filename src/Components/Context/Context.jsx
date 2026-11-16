import { createContext, useState } from "react";
import { uz } from "../../../lang";

export const Context = createContext()

const ContextProvider = ({ children }) => {
    const [notes, setNotes] = useState([
        { id: "1", title: "Salom", text: "Baribir", date: new Date().toLocaleDateString() },
        { id: "2", title: "Nima", text: "Kimdir", date: new Date().toLocaleDateString() },
        { id: "3", title: "Xayr", text: "Nimadirku", date: new Date().toLocaleDateString() }
    ]);
    const [value, setValue] = useState("");
    const [lang, setLang] = useState(uz);
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [modal, setModal] = useState(false);
    const [update, setUpdate] = useState({ note: {}, edit: false });

    const resetForm = () => {
        setModal(false)
        setTitle("")
        setText("")
        setUpdate({ note: {}, edit: false })
    }

    const addNote = () => {
        if (text.trim().length > 2 && title.trim().length > 2) {
            const newObj = {
                id: update.edit ? update.note.id : crypto.randomUUID().slice(0, 8),
                title: title.trim(),
                text: text.trim(),
                date: new Date().toLocaleDateString()
            }
            if (update.edit) {
                setNotes(notes.map(note => note.id === update.note.id ? newObj : note))
            } else {
                setNotes([...notes, newObj])
            }
            resetForm()
        }
    }

    const changeNote = (note) => {
        setModal(true)
        setTitle(note.title)
        setText(note.text)
        setUpdate({ note: note, edit: true })
    }

    const delUser = (id) => {
        setNotes(notes.filter(note => note.id !== id))
    }

    return (
        <Context.Provider value={{ value, setValue, update, changeNote, delUser, lang, setLang, modal, setModal, resetForm, notes, title, setTitle, text, setText, addNote }}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider

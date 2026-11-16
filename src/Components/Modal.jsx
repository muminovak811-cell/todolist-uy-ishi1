import { useContext } from "react"
import { Context } from "./Context/Context"

const Modal = () => {
    const { lang, modal, update, title, setTitle, text, setText, addNote, resetForm } = useContext(Context)
    return (
        <div className={`modal ${modal ? "active" : ""}`}>
            <div className="modal__card">
                <h2 className="modal__title">{update.edit ? lang.titlewindowedit : lang.titlewindow}</h2>
                <label>
                    <span>{lang.titlelabel}</span>
                    <input
                        type="text"
                        placeholder={lang.titlelabel}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </label>
                <label>
                    <span>{lang.contentlabel}</span>
                    <input
                        type="text"
                        placeholder={lang.contentlabel}
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </label>
                <div className="modal__btns">
                    <button className="btn danger" onClick={resetForm}>{lang.closebtn}</button>
                    <button className="btn primary" onClick={addNote}>{update.edit ? lang.editwindowbtn : lang.addbtn}</button>
                </div>
            </div>
        </div>
    )
}

export default Modal

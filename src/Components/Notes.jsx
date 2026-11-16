import gridIcon from "../assets/Images/grid.svg";
import listIcon from "../assets/Images/list.svg";
import pencilIcon from "../assets/Images/pencil.svg";
import trashIcon from "../assets/Images/trash.svg";
import { useContext, useState } from "react";
import { Context } from "./Context/Context";

const Notes = () => {
    const [grid, setGrid] = useState(true);
    const { lang, notes, value, delUser, changeNote } = useContext(Context)
    const changeGrid = () => {
        setGrid(!grid)
    }
    const notesFilter = notes.filter(note => note.title.toLowerCase().includes(value.toLowerCase()))

    return (
        <div className="notes">
            <div className="container">
                <div className="notes__top">
                    <h2 className="notes__top__title">{lang.infobar}</h2>
                    <button className="notes__top__btn" onClick={changeGrid}>
                        {grid ?
                            <>
                                <img src={listIcon} alt="" />
                                <span>{lang.list}</span>
                            </> :
                            <>
                                <img src={gridIcon} alt="" />
                                <span>{lang.grid}</span>
                            </>
                        }
                    </button>
                </div>
                {notesFilter.length ? (
                    <div className={`notes__box ${grid ? "active" : ""}`}>
                        {notesFilter.map(note => (
                            <div className="notes__card" key={note.id}>
                                <div className="notes__card__info">
                                    <h3 className="notes__card__title">{note.title}</h3>
                                    <p className="notes__card__date">{note.date}</p>
                                </div>
                                <p className="notes__card__text">{note.text}</p>
                                <div className="notes__card__btns">
                                    <button className="btn primary" onClick={() => changeNote(note)}>
                                        <img src={pencilIcon} alt="" />
                                        <span>{lang.editbtn}</span>
                                    </button>
                                    <button className="btn danger" onClick={() => delUser(note.id)}>
                                        <img src={trashIcon} alt="" />
                                        <span>{lang.deledit}</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="nonote">{lang.nonote}</p>
                )}
            </div>
        </div>
    )
}

export default Notes

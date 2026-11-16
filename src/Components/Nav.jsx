import uzFlag from "../assets/Images/flag-uz.svg";
import ruFlag from "../assets/Images/flag-ru.svg";
import searchIcon from "../assets/Images/search.svg";
import backIcon from "../assets/Images/backIcon.svg";
import clearIcon from "../assets/Images/clearIcon.svg";
import { useContext, useState } from "react";
import { ru, uz } from "../../lang";
import { Context } from "./Context/Context";

const Nav = () => {
    const [search, setSearch] = useState(false);
    const { value, setValue, lang, setLang } = useContext(Context)
    const isUz = lang === uz

    return (
        <>
            <div className="nav">
                <div className="nav__lang">
                    <button className={`nav__lang__btn ${!isUz ? "active" : ""}`} onClick={() => setLang(uz)}>
                        Uz
                        <img src={uzFlag} alt="" />
                    </button>
                    <button className={`nav__lang__btn ${isUz ? "active" : ""}`} onClick={() => setLang(ru)}>
                        Ru
                        <img src={ruFlag} alt="" />
                    </button>
                </div>
                <h2 className="nav__title">{lang.appbartitle}</h2>
                <button className="nav__search" onClick={() => setSearch(true)}>
                    <img src={searchIcon} alt="" />
                </button>
            </div>
            <nav className={`nav search ${search ? "active" : ""}`}>
                <button className="nav__back" onClick={() => setSearch(false)}>
                    <img src={backIcon} alt="" />
                </button>
                <div className="container">
                    <input
                        type="text"
                        placeholder={lang.appbarseacrch}
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                </div>
                <button className="nav__clear" onClick={() => setValue("")}>
                    <img src={clearIcon} alt="" />
                </button>
            </nav>
        </>
    )
}

export default Nav

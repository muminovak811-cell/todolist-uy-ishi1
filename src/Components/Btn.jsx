import pencil from "../assets/Images/pencil.svg";
import { useContext } from "react"
import { Context } from "./Context/Context"

const Btn = () => {
    const { setModal } = useContext(Context)
    return (
        <button className="addbtn" onClick={() => setModal(true)}>
            <img src={pencil} alt="" />
        </button>
    )
}

export default Btn

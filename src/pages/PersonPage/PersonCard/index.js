import style from './persons.module.css'
import {NavLink} from "react-router-dom";

const PersonCard = (props) => {
    const {personImg, personCard} = style
    const {name, id, cards} = props || {}

    let path = `/game/${id}`

    return (
        <div className={personCard}>
            <NavLink to={path}>
                <img className={personImg} src={cards} alt={name}/>
            </NavLink>

        </div>
    )
}

export default PersonCard
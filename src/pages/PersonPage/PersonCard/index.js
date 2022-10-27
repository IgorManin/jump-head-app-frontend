import style from './persons.module.css'
import {NavLink} from "react-router-dom";



const PersonCard = (props) => {
const {persons} = style

    let path = '/game/' + props.id

    return (
        <div className={persons}>
            <NavLink to={path}>
                {props.name}
            </NavLink>


        </div>
    )
}

export default PersonCard
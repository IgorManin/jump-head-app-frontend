import style from './person.module.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";

const Person = (props) => {
    const {some} = style

    let path = '/game/' + props.id
    return (

        <div className={some}>
        {props.id}
            Первый
        </div>
    )
}

export default Person
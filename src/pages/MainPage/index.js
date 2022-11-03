import style from './mainMenu.module.css'
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";

const MainPage = () => {
    const {mainMenu, text} = style

    return (
        <div className={mainMenu}>
            <p className={text}>Jump Head Game</p>
            <NavLink to='/choose'>
                <button>Начать игру</button>
            </NavLink>
        </div>
    )
}

export default MainPage







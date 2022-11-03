import React from "react";
import ChoosePerson from "./components/MainMenu/ChoosePerson";
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import GamePage from "./pages/GamePage";
import alexey from './img/leha.png'
import andrey from './img/andrik.png'
import sam from './img/sam.png'
import personAlexey from './img/PersonLeha.png'
import personAndrey from './img/personAndrik.png'
import personSam from './img/personSam.png'




const persons = {
    namePersons: [
        {id:1, name: 'Andrey', img: andrey, personCard: personAndrey},
        {id:2, name: 'Alexey', img: alexey, personCard: personAlexey },
        {id:3, name: 'Sam', img: sam, personCard: personSam },

    ]
}

const App = ({state}) => <BrowserRouter>
    <Routes>
        <Route path='/' element={<MainPage state={state}/>}></Route>
        <Route path='/choose' element={<ChoosePerson persons={persons}  />}></Route>
        <Route path='/game/:id' element={<GamePage persons={persons} />}></Route>
    </Routes>
</BrowserRouter>

export default App;

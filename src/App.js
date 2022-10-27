import React from "react";
import ChoosePerson from "./components/MainMenu/ChoosePerson";
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import GamePage from "./pages/GamePage";


const persons = {
    namePersons: [
        {id:1, name: 'Andrey'},
        {id:2, name: 'Alexey'},
        {id:3, name: 'Sam'},

    ]
}

const App = ({state}) => <BrowserRouter>
    <Routes>
        <Route path='/' element={<MainPage state={state}/>}></Route>
        <Route path='/choose' element={<ChoosePerson persons={persons} />}></Route>
        <Route path='/game' element={<GamePage persons={persons}/>}></Route>
    </Routes>
</BrowserRouter>

export default App;

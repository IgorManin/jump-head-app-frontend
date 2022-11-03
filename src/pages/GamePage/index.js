import Game from "./Game";
import {useParams} from "react-router-dom";



const GamePage = (props) => {


    const {id}  = useParams();
    return (
        <Game persons={props.persons} id={id} />

    )
}

export default GamePage
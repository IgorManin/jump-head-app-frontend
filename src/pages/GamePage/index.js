import Game from "./Game";



const GamePage = (props) => {

    return (
        <div>
            <Game persons={props.persons}/>
        </div>
    )
}

export default GamePage
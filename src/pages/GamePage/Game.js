import Person from "./persons/Person";
import style from './GamePage.module.css'

const Game = (props) => {
    const {gamePage, count, buttonBlock, gameBlock, piki} = style

    const currentName = props.persons.namePersons.find(({id}) => id === +props.id)
    return (
        <div className={gamePage}>
            <div className={count}>Count</div>
            <div className={gameBlock}>
                <Person id={props.id} name={currentName} src={currentName} />
                <div className={piki}>piki</div>
            </div>
            <div className={buttonBlock}>buttonBlock</div>
        </div>

    )
}

export default Game
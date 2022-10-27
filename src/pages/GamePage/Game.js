import Person from "./persons/Person";
import style from './GamePage.module.css'

const Game = (props) => {
    const {gamePage,count,gameBlock,buttonBlock} = style

    return(
            <div className={gamePage}>
            <div className={count}>Count</div>
                {props.persons.namePersons.map((el)=> <Person id={el.id} />)}
            <div className={buttonBlock}>buttonBlock</div>
            </div>

    )
}

export default Game
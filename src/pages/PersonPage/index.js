import style from './personPage.module.css'
import PersonCard from "./PersonCard";


const PersonPage = (props) => {
    const {personBlock, header, playersCard, footer} = style

    return (
        <div className={personBlock}>

            <div className={header}>Header</div>
            <div className={playersCard}>
                {props.persons.namePersons.map((el) => <PersonCard name={el.name} id={el.id}/>)}
            </div>
            <div className={footer}>Footer</div>

        </div>
    )
}

export default PersonPage
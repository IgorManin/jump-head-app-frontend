import PersonPage from "../../pages/PersonPage";
import style from './ChoosePerson.module.css'


const ChoosePerson = (props) => {
    return (
            <div className={style.mainBlock}>
                <PersonPage persons={props.persons}/>
            </div>
    )

}


export default ChoosePerson
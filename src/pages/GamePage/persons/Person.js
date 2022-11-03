import style from './person.module.css'

const Person = (props) => {
    const {some, img} = style
    const {src,name} = props || {}

    return (

        <div className={some}>
            <img className={img} src={src.img} alt={name}/>
        </div>

    )

}

export default Person
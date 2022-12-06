const Welcome = (props) =>{
    return (
        <p> Benvenuto, {props.user.name} {props.user.surname}</p>
    )
}

export default Welcome;
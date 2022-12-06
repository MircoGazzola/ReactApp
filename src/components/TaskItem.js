const TaskItem = (props) => {
    const textStyle = props.task.completed ? { color : 'blue'} : {color : 'red'}

    return( 
    <p>
        {props.task.title} {props.task.completed ? <span style={textStyle}>✅</span> : <span style={textStyle}>❌</span>}
    </p>
    );
}

export default TaskItem;
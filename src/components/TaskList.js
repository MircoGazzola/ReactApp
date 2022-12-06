import TaskItem from './TaskItem';

const TaskList = (props) => {
    return(
        <ul>
            {props.tasks.map((task, index) => <TaskItem task={task} key={index} />)}
        </ul>
    );
}

export default TaskList;
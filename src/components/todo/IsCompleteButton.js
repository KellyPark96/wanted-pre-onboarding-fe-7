import { TodoIsCompleteButton } from "./TodoContentsStyle"

const IsCompleteButton = ({isCompleted, onClick}) => {
    return (
        <TodoIsCompleteButton type="submit" onClick={onClick}>{!isCompleted ? 'Uncompleted' : 'Completed'}</TodoIsCompleteButton>
    )
}

export default IsCompleteButton;

import TodoItem from './TodoItem';
import {memo, useMemo} from 'react';


const TodoItemList = (props) => {
    const {todos, onToggle, onRemove} = props;

    const todoList = useMemo(() => todos.map(( {id, text, checked }) => (
        <TodoItem
            id = {id}
            text = {text}
            checked = {checked}
            onToggle = {onToggle}
            onRemove = {onRemove}
            key = {id}
        />
    )), [todos, onToggle, onRemove]);

    return (
        <div>
        {todoList}
        </div>
    );
}


export default memo(TodoItemList);
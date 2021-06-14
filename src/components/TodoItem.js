import './TodoItem.css';
import {memo, useCallback} from 'react';

const TodoItem = (props) => {
    const {text, checked, id, onToggle, onRemove} = props;

    const handleRemove = useCallback((e) => {
        e.stopPropagation();
        onRemove(id);
    }, [id, onRemove]);
    return (
        <div className="todo-item" onClick={() => onToggle(id)}>
                <div className="remove" onClick={handleRemove}> &times; </div>
                <div className={`todo-text ${checked && 'checked'}`}>
                    <div>{text}</div>
                </div>
                {
                    checked && (<div className="check-mark">✓</div>)
                }
            </div>
    );
}

export default memo(TodoItem);
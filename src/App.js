import { useState, useCallback, memo } from 'react'
import TodoListTemplate from './components/TodoListTemplate'
import Form from './components/Form'
import TodoItemList from './components/TodoItemList'

let id = 0;

const App = () => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  const handleChange = useCallback((e) => {
    setInput(e.target.value);
  }, []);

  const handleCreate = useCallback(() => {
    setInput('');
    setTodos(todos.concat({
      id: id++,
      text: input,
      checked: false
    }));
  }, [todos, input]);

  const handleKeyPress = useCallback((e) => {
    if(e.key === 'Enter') {
      handleCreate();
    }
  }, [handleCreate]);

  const handleToggle = useCallback((id) => {
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index];

    const nextTodos = [...todos];

    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    }
    setTodos(nextTodos);
  },[todos]);
    

  const handleRemove = useCallback((id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  },[todos]);

  const todoListForm = (
    <Form 
      value = {input}
      onKeyPress = {handleKeyPress}
      onChange = {handleChange}
      onCreate = {handleCreate}
    />
  );
  return (
    <TodoListTemplate form={todoListForm}>
        <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
    </TodoListTemplate>
  );

}

export default memo(App);

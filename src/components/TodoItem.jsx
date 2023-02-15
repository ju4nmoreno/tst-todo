
const TodoItem = ({ todo, handleDeleteTodo, handleCompleted }) => {
  const { completed, id, text } = todo

  return (
    <li>
      <input type='checkbox' onChange={() => handleCompleted(id)} />
      <span className={`${completed ? 'sub' : ''}`}>{text}</span>
      <button onClick={() => handleDeleteTodo(id)}>del</button>
    </li>
  )
}

export default TodoItem

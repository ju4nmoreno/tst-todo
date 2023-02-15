
const TodoForm = ({ handleSubmit, handleValue, value }) => (
  <form onSubmit={handleSubmit}>
    <input type='text' name='task' value={value} onChange={(e) => handleValue(e.target.value)} />
    <button>add Todo</button>
  </form>
)

export default TodoForm
/*
  const {task} = event.target as typeof event.target & {
    task: { value: string }
  }
*/
